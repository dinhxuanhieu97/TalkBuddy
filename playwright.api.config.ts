import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  testMatch: "api.spec.ts",
  timeout: 15000,
  use: {
    headless: true,
  },
  projects: [{ name: "api" }],
});
