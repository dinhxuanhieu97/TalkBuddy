import { test } from "@playwright/test";

const BACKEND = "http://127.0.0.1:5277";

test("Debug register 500 error", async ({ request }) => {
  const email = `debug_${Date.now()}@talkbuddy.io`;
  const res = await request.post(`${BACKEND}/api/auth/register`, {
    data: { email, password: "Test@12345", name: "Debug User" },
    failOnStatusCode: false,
  });
  const status = res.status();
  const body = await res.text();
  console.log(`Status: ${status}`);
  console.log(`Body: ${body}`);
});
