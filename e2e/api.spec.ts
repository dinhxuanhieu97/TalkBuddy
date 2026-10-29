import { test, expect } from "@playwright/test";

const BACKEND = "http://127.0.0.1:5277";

test.describe("Backend API Tests", () => {
  test("1. Backend is reachable", async ({ request }) => {
    const res = await request.get(`${BACKEND}/api/auth/me`, {
      headers: { Authorization: "Bearer invalid" },
      failOnStatusCode: false,
    });
    expect([200, 401]).toContain(res.status());
    console.log(`✅ Backend UP — GET /api/auth/me → ${res.status()}`);
  });

  test("2. Register new account", async ({ request }) => {
    const email = `pw_test_${Date.now()}@talkbuddy.io`;
    const res = await request.post(`${BACKEND}/api/auth/register`, {
      data: { email, password: "Test@12345", name: "Playwright Test" },
      failOnStatusCode: false,
    });
    const status = res.status();
    const body = await res.text();
    console.log(`   POST /api/auth/register → ${status}`);
    if (status === 500) {
      console.log(`❌ 500 Error body: ${body.slice(0, 800)}`);
    } else {
      console.log(`✅ Register OK (${status})`);
    }
    expect(status).not.toBe(500);
  });

  test("3. Login with valid credentials", async ({ request }) => {
    // First register
    const email = `login_test_${Date.now()}@talkbuddy.io`;
    await request.post(`${BACKEND}/api/auth/register`, {
      data: { email, password: "Test@12345", name: "Login Test" },
      failOnStatusCode: false,
    });

    // Then login
    const res = await request.post(`${BACKEND}/api/auth/login`, {
      data: { email, password: "Test@12345" },
      failOnStatusCode: false,
    });
    const status = res.status();
    const body = await res.json().catch(() => ({}));
    console.log(`   POST /api/auth/login → ${status}`);
    if (status === 200 && body.token) {
      console.log(`✅ Login OK — token received`);
    } else {
      console.log(`❌ Login FAILED: ${JSON.stringify(body)}`);
    }
    expect(status).toBe(200);
  });

  test("4. Login with wrong password returns 401", async ({ request }) => {
    const res = await request.post(`${BACKEND}/api/auth/login`, {
      data: { email: "fake@talkbuddy.io", password: "wrongpass" },
      failOnStatusCode: false,
    });
    console.log(`   POST /api/auth/login (wrong creds) → ${res.status()}`);
    expect(res.status()).toBe(401);
    console.log("✅ Wrong password correctly rejected");
  });

  test("5. Google auth endpoint reachable", async ({ request }) => {
    const res = await request.post(`${BACKEND}/api/auth/google`, {
      data: { accessToken: "fake_token", idToken: "fake_token" },
      failOnStatusCode: false,
    });
    const status = res.status();
    console.log(`   POST /api/auth/google (fake token) → ${status}`);
    // 400 = endpoint works but token invalid (expected)
    // 500 = server crashed
    if (status === 400) {
      console.log("✅ Google auth endpoint UP (400 = invalid token, expected)");
    } else if (status === 500) {
      const body = await res.text();
      console.log(`❌ Google auth 500: ${body.slice(0, 500)}`);
    }
    expect(status).not.toBe(500);
  });

  test("6. Apple auth endpoint reachable", async ({ request }) => {
    const res = await request.post(`${BACKEND}/api/auth/apple`, {
      data: { idToken: "fake.jwt.token", user: "{}" },
      failOnStatusCode: false,
    });
    const status = res.status();
    console.log(`   POST /api/auth/apple (fake token) → ${status}`);
    if (status === 400) {
      console.log("✅ Apple auth endpoint UP (400 = invalid token, expected)");
    } else if (status === 500) {
      const body = await res.text();
      console.log(`❌ Apple auth 500: ${body.slice(0, 500)}`);
    }
    expect(status).not.toBe(500);
  });
});
