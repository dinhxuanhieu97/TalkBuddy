import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  testMatch: "debug.spec.ts",
  timeout: 15000,
  use: { headless: true },
  projects: [{ name: "debug" }],
});
