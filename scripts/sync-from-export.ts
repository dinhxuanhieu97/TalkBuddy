/**
 * Sync scenes from web export API to backend
 * 
 * Usage:
 *   npx tsx scripts/sync-from-export.ts
 *   npx tsx scripts/sync-from-export.ts hotel airport
 */

const API_URL = process.env.API_URL ?? "http://localhost:5277";
const SEED_KEY = process.env.SEED_KEY ?? "0e0c4e63d717af80c7c3640c5ba8e79a0ea8da4c84f86fb591e75ffbf56c4138";
const EXPORT_API_URL = "https://talkbuddy.wayjet.io";
const EXPORT_API_KEY = "b3677caf2e11591d30be3ee616bb2e16a1126436c8b00b83c4b39108cc7551ae";

const IMPORT_ENDPOINT = `${API_URL}/api/content/import-scenes`;
const BATCH_SIZE = 5;

interface ExportScene {
  id: string;
  category: string;
  titleEn: string;
  titleZh: string;
  description: string;
  otherRole: string;
  otherRoleIcon?: string;
  flows: ExportFlow[];
}

interface ExportFlow {
  id: string;
  titleEn: string;
  titleZh: string;
  description?: string;
  difficulty: number;
  turns: ExportTurn[];
}

interface ExportTurn {
  speaker: string;
  textEn: string;
  textZh: string;
}

async function fetchManifest() {
  const res = await fetch(`${EXPORT_API_URL}/api/export/manifest`, {
    headers: { "X-API-Key": EXPORT_API_KEY },
  });
  const json = await res.json();
  return json.data.categories;
}

async function fetchScenes(category: string) {
  const res = await fetch(`${EXPORT_API_URL}/api/export/scenes/${category}`, {
    headers: { "X-API-Key": EXPORT_API_KEY },
  });
  const json = await res.json();
  return json.data.scenes;
}

function transformToImportFormat(scenes: ExportScene[]) {
  return scenes.map((scene) => ({
    id: scene.id,
    category: scene.category,
    titleEn: scene.titleEn,
    titleZh: scene.titleZh,
    description: scene.description,
    otherRole: scene.otherRole,
    otherRoleIcon: scene.otherRoleIcon,
    flows: scene.flows.map((flow) => ({
      id: flow.id,
      titleEn: flow.titleEn,
      titleZh: flow.titleZh,
      description: flow.description,
      difficulty: flow.difficulty.toString(),
      turns: flow.turns.map((turn) => ({
        speaker: turn.speaker,
        textEn: turn.textEn,
        textZh: turn.textZh,
      })),
    })),
  }));
}

async function importScenes(scenes: any[]) {
  let totalInserted = 0;
  let totalUpdated = 0;

  for (let i = 0; i < scenes.length; i += BATCH_SIZE) {
    const batch = scenes.slice(i, i + BATCH_SIZE);
    const ids = batch.map((s: any) => s.id).join(", ");
    process.stdout.write(`  [${ids}] ... `);

    const res = await fetch(IMPORT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Seed-Key": SEED_KEY,
      },
      body: JSON.stringify(batch),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status}: ${text}`);
    }

    const json = await res.json();
    totalInserted += json.inserted;
    totalUpdated += json.updated;
    console.log(`inserted=${json.inserted}, updated=${json.updated}`);
  }

  return { inserted: totalInserted, updated: totalUpdated };
}

async function main() {
  const args = process.argv.slice(2);
  const categories = args.length > 0 ? args : null;

  console.log(`\nSync from: ${EXPORT_API_URL}`);
  console.log(`Import to: ${API_URL}\n`);

  // Get manifest
  console.log("Fetching manifest...");
  const manifest = await fetchManifest();
  const categoryIds = categories || Object.keys(manifest);
  console.log(`Categories: ${categoryIds.join(", ")}\n`);

  let totalImported = 0;

  for (const categoryId of categoryIds) {
    const info = manifest[categoryId];
    if (!info) {
      console.log(`Skipping ${categoryId} - not in manifest`);
      continue;
    }

    console.log(`\n=== ${categoryId.toUpperCase()} (${info.sceneCount} scenes) ===`);

    const scenes = await fetchScenes(categoryId);
    const importData = transformToImportFormat(scenes);

    const result = await importScenes(importData);
    totalImported += result.inserted + result.updated;

    console.log(`  => ${categoryId}: inserted=${result.inserted}, updated=${result.updated}`);
  }

  console.log(`\n=== DONE ===`);
  console.log(`Total imported: ${totalImported} scenes`);
}

main().catch(console.error);
