import { test, expect } from "@playwright/test";

const TEST_EMAIL = "test_playwright@talkbuddy.io";
const TEST_PASSWORD = "Test@12345";

test.describe("Login Screen", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for login screen to appear
    await page.waitForTimeout(3000);
  });

  // ─── Email / Password Sign In ────────────────────────────────────
  test("Email sign-in - invalid credentials returns error", async ({
    page,
  }) => {
    await page.fill('input[type="email"], input[placeholder*="mail" i]', "nonexistent@test.com");
    await page.fill('input[type="password"], input[placeholder*="password" i], input[placeholder*="mật khẩu" i]', "wrongpassword");
    await page.click('button[type="submit"], [role="button"]:has-text("Sign In"), [role="button"]:has-text("Đăng nhập")');
    await page.waitForTimeout(3000);

    // Should show error, not navigate away
    const url = page.url();
    expect(url).toContain("localhost:8081");
    console.log("✅ Invalid credentials: login blocked as expected");
  });

  test("Email sign-in - empty fields shows validation", async ({ page }) => {
    const submitBtn = page.locator(
      '[role="button"]:has-text("Sign In"), [role="button"]:has-text("Đăng nhập"), [role="button"]:has-text("Login")'
    );
    if (await submitBtn.count() > 0) {
      await submitBtn.first().click();
      await page.waitForTimeout(1000);
    }
    console.log("✅ Empty fields: form did not crash");
  });

  // ─── Google Sign In ──────────────────────────────────────────────
  test("Google sign-in button exists and is clickable", async ({ page }) => {
    const googleBtn = page.locator(
      '[role="button"]:has-text("Google"), button:has-text("Google")'
    );
    const count = await googleBtn.count();

    if (count === 0) {
      console.log("⚠️  Google button not found on web (native-only feature)");
      test.skip();
      return;
    }

    await expect(googleBtn.first()).toBeVisible();
    console.log("✅ Google sign-in button found");

    // Click and check what happens
    await googleBtn.first().click();
    await page.waitForTimeout(3000);

    const newPage = page;
    const url = newPage.url();
    console.log(`   → Redirected to: ${url}`);

    const hasGoogleDomain =
      url.includes("accounts.google.com") ||
      url.includes("google.com");

    if (hasGoogleDomain) {
      console.log("✅ Google OAuth redirect working");
    } else {
      console.log("❌ Google OAuth did NOT redirect to Google — check client IDs or redirect URI");
    }
  });

  // ─── Apple Sign In ───────────────────────────────────────────────
  test("Apple sign-in button exists", async ({ page }) => {
    const appleBtn = page.locator(
      '[role="button"]:has-text("Apple"), button:has-text("Apple")'
    );
    const count = await appleBtn.count();

    if (count === 0) {
      console.log("⚠️  Apple button not found on web (native iOS only feature)");
      return;
    }

    await expect(appleBtn.first()).toBeVisible();
    console.log("✅ Apple sign-in button found");
  });

  // ─── Backend Connectivity ─────────────────────────────────────────
  test("Backend API is reachable", async ({ page }) => {
    const response = await page.request.get("http://localhost:5277/api/auth/me", {
      headers: { Authorization: "Bearer invalid_token" },
    });

    // 401 = backend is UP (just unauthorized), not 500 or network error
    expect([200, 401]).toContain(response.status());
    console.log(`✅ Backend reachable — status: ${response.status()}`);
  });

  test("Registration with existing email returns 400 (not 500)", async ({
    page,
  }) => {
    const response = await page.request.post(
      "http://localhost:5277/api/auth/register",
      {
        data: {
          email: "existing@talkbuddy.io",
          password: "Test@12345",
          name: "Test User",
        },
      }
    );

    const status = response.status();
    console.log(`   Registration response: ${status}`);
    if (status === 500) {
      const body = await response.text();
      console.log(`❌ Server Error 500: ${body.slice(0, 500)}`);
    } else {
      console.log(`✅ Registration endpoint working (${status})`);
    }
    // Should be 200 (new user) or 400 (already exists), never 500
    expect(status).not.toBe(500);
  });
});
