/**
 * Seed script: migrates airport.ts data → .NET backend via import-scenes API.
 *
 * Run from the Talk-Buddy-App directory:
 *   npx tsx scripts/seed-airport.ts
 *
 * Optional env vars:
 *   API_URL  – defaults to http://localhost:5277
 */
import { AIRPORT_SCENES } from "../src/data/scenes/airport.js";

const API_URL = process.env.API_URL ?? "http://localhost:5277";
const SEED_KEY = process.env.SEED_KEY ?? "";
const ENDPOINT = `${API_URL}/api/content/import-scenes`;

const BATCH_SIZE = 5; // scenes per request to avoid request-body limits

async function seed() {
  console.log(`\n🌐  Seeding to: ${ENDPOINT}`);
  console.log(`📦  Total airport scenes: ${AIRPORT_SCENES.length}\n`);

  let totalInserted = 0;
  let totalSkipped = 0;

  for (let i = 0; i < AIRPORT_SCENES.length; i += BATCH_SIZE) {
    const batch = AIRPORT_SCENES.slice(i, i + BATCH_SIZE);
    const ids = batch.map((s) => s.id).join(", ");
    process.stdout.write(
      `  Batch ${Math.floor(i / BATCH_SIZE) + 1}: [${ids}] ... `,
    );

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(SEED_KEY ? { "X-Seed-Key": SEED_KEY } : {}),
      },
      body: JSON.stringify(batch),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`\n  ❌ HTTP ${res.status}: ${text}`);
      process.exit(1);
    }

    const json = (await res.json()) as {
      success: boolean;
      inserted: number;
      skipped: number;
      message: string;
    };

    totalInserted += json.inserted;
    totalSkipped += json.skipped;
    console.log(`✅ inserted=${json.inserted}, skipped=${json.skipped}`);
  }

  console.log(
    `\n✨ Done — inserted: ${totalInserted}, skipped: ${totalSkipped}`,
  );
}

seed().catch((err) => {
  console.error("\n❌ Seed failed:", err);
  process.exit(1);
});
