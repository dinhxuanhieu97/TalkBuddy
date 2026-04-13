/**
 * Seed ALL scene categories to the .NET backend.
 *
 * Usage (from Talk-Buddy-App directory):
 *   npx tsx scripts/seed-all-scenes.ts                     # seed everything
 *   npx tsx scripts/seed-all-scenes.ts hotel restaurant     # seed specific categories
 *   API_URL=https://yourserver.com npx tsx scripts/seed-all-scenes.ts
 */
import { AIRPORT_SCENES } from "../src/data/scenes/airport.js";
import { AIRPORT_SCENES_EXT } from "../src/data/scenes/airport-ext.js";
import { HOTEL_SCENES } from "../src/data/scenes/hotel.js";
import { HOTEL_SCENES_EXT } from "../src/data/scenes/hotel-ext.js";
import { RESTAURANT_SCENES } from "../src/data/scenes/restaurant.js";
import { RESTAURANT_SCENES_EXT } from "../src/data/scenes/restaurant-ext.js";
import { SHOPPING_SCENES } from "../src/data/scenes/shopping.js";
import { SHOPPING_SCENES_EXT } from "../src/data/scenes/shopping-ext.js";
import { TRANSPORT_SCENES } from "../src/data/scenes/transport.js";
import { TRANSPORT_SCENES_EXT } from "../src/data/scenes/transport-ext.js";
import { MEDICAL_SCENES } from "../src/data/scenes/medical.js";
import { MEDICAL_SCENES_EXT } from "../src/data/scenes/medical-ext.js";
import { SOCIAL_SCENES } from "../src/data/scenes/social.js";
import { SOCIAL_SCENES_EXT } from "../src/data/scenes/social-ext.js";
import { EMERGENCY_SCENES } from "../src/data/scenes/emergency.js";
import { EMERGENCY_SCENES_EXT } from "../src/data/scenes/emergency-ext.js";
import { FOUNDATION_SCENES } from "../src/data/scenes/foundation.js";
import { FOUNDATION_SCENES_EXT } from "../src/data/scenes/foundation-ext.js";
import { ENTERTAINMENT_SCENES } from "../src/data/scenes/entertainment.js";
import { ENTERTAINMENT_SCENES_EXT } from "../src/data/scenes/entertainment-ext.js";
import { BANKING_SCENES } from "../src/data/scenes/banking.js";
import { BANKING_SCENES_EXT } from "../src/data/scenes/banking-ext.js";
import { ACCOMMODATION_SCENES } from "../src/data/scenes/accommodation.js";
import { ACCOMMODATION_SCENES_EXT } from "../src/data/scenes/accommodation-ext.js";
import { DAILY_LIFE_SCENES } from "../src/data/scenes/daily-life.js";
import { DAILY_LIFE_SCENES_EXT } from "../src/data/scenes/daily-life-ext.js";

const API_URL = process.env.API_URL ?? "http://localhost:5277";
const SEED_KEY = process.env.SEED_KEY ?? "";
const ENDPOINT = `${API_URL}/api/content/import-scenes`;
const BATCH_SIZE = 5;

// All categories: core scenes merged with ext scenes
const ALL_CATEGORIES: Record<string, { id: string; scenes: any[] }> = {
  airport: {
    id: "airport",
    scenes: [...AIRPORT_SCENES, ...AIRPORT_SCENES_EXT],
  },
  hotel: {
    id: "hotel",
    scenes: [...HOTEL_SCENES, ...HOTEL_SCENES_EXT],
  },
  restaurant: {
    id: "restaurant",
    scenes: [...RESTAURANT_SCENES, ...RESTAURANT_SCENES_EXT],
  },
  shopping: {
    id: "shopping",
    scenes: [...SHOPPING_SCENES, ...SHOPPING_SCENES_EXT],
  },
  transport: {
    id: "transport",
    scenes: [...TRANSPORT_SCENES, ...TRANSPORT_SCENES_EXT],
  },
  medical: {
    id: "medical",
    scenes: [...MEDICAL_SCENES, ...MEDICAL_SCENES_EXT],
  },
  social: {
    id: "social",
    scenes: [...SOCIAL_SCENES, ...SOCIAL_SCENES_EXT],
  },
  emergency: {
    id: "emergency",
    scenes: [...EMERGENCY_SCENES, ...EMERGENCY_SCENES_EXT],
  },
  foundation: {
    id: "foundation",
    scenes: [...FOUNDATION_SCENES, ...FOUNDATION_SCENES_EXT],
  },
  entertainment: {
    id: "entertainment",
    scenes: [...ENTERTAINMENT_SCENES, ...ENTERTAINMENT_SCENES_EXT],
  },
  banking: {
    id: "banking",
    scenes: [...BANKING_SCENES, ...BANKING_SCENES_EXT],
  },
  accommodation: {
    id: "accommodation",
    scenes: [...ACCOMMODATION_SCENES, ...ACCOMMODATION_SCENES_EXT],
  },
  "daily-life": {
    id: "daily-life",
    scenes: [...DAILY_LIFE_SCENES, ...DAILY_LIFE_SCENES_EXT],
  },
};

async function seedCategory(
  categoryId: string,
  scenes: any[],
): Promise<{ inserted: number; skipped: number }> {
  let totalInserted = 0;
  let totalSkipped = 0;

  for (let i = 0; i < scenes.length; i += BATCH_SIZE) {
    const batch = scenes.slice(i, i + BATCH_SIZE);
    const ids = batch.map((s: any) => s.id).join(", ");
    process.stdout.write(`    [${ids}] ... `);

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
      throw new Error(`HTTP ${res.status}: ${text}`);
    }

    const json = (await res.json()) as {
      inserted: number;
      skipped: number;
    };

    totalInserted += json.inserted;
    totalSkipped += json.skipped;
    console.log(`inserted=${json.inserted}, skipped=${json.skipped}`);
  }

  return { inserted: totalInserted, skipped: totalSkipped };
}

async function main() {
  // Determine which categories to seed (from CLI args or all)
  const args = process.argv.slice(2);
  const targets =
    args.length > 0
      ? args.filter((a) => ALL_CATEGORIES[a])
      : Object.keys(ALL_CATEGORIES);

  const unknown = args.filter((a) => !ALL_CATEGORIES[a]);
  if (unknown.length > 0) {
    console.error(`❌ Unknown categories: ${unknown.join(", ")}`);
    console.error(`   Valid: ${Object.keys(ALL_CATEGORIES).join(", ")}`);
    process.exit(1);
  }

  console.log(`\n🌐  Seeding to: ${ENDPOINT}`);
  console.log(`📦  Categories: ${targets.join(", ")}\n`);

  let grandTotal = { inserted: 0, skipped: 0 };

  for (const catId of targets) {
    const { scenes } = ALL_CATEGORIES[catId];
    console.log(`\n── ${catId.toUpperCase()} (${scenes.length} scenes) ──`);
    try {
      const result = await seedCategory(catId, scenes);
      grandTotal.inserted += result.inserted;
      grandTotal.skipped += result.skipped;
      console.log(
        `  ✅ ${catId}: inserted=${result.inserted}, skipped=${result.skipped}`,
      );
    } catch (err) {
      console.error(`  ❌ ${catId} failed:`, err);
      process.exit(1);
    }
  }

  console.log(
    `\n✨ All done — total inserted: ${grandTotal.inserted}, skipped: ${grandTotal.skipped}\n`,
  );
}

main().catch((err) => {
  console.error("\n❌ Fatal:", err);
  process.exit(1);
});
