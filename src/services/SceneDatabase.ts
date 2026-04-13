/**
 * SceneDatabase – SQLite-backed cache for offline scene data (native only).
 *
 * On iOS/Android: expo-sqlite stores scenes in a local DB file.
 * On Web:         falls back gracefully (returns null so caller uses API).
 *
 * Schema (single table, JSON-blob approach for simplicity):
 *   scene_cache(id, category_id, data TEXT, cached_at INTEGER)
 */
import { Platform } from "react-native";
import type { PresetScene } from "../data/preset-scenes";

const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const DB_NAME = "talkbuddy_scenes.db";

// Dynamic import so the module doesn't crash on web where expo-sqlite is absent.
let _db: import("expo-sqlite").SQLiteDatabase | null = null;
let _initialized = false;

async function getDb(): Promise<import("expo-sqlite").SQLiteDatabase | null> {
  if (Platform.OS === "web") return null;

  if (_initialized) return _db;
  _initialized = true;

  try {
    const SQLite = await import("expo-sqlite");
    _db = await SQLite.openDatabaseAsync(DB_NAME);

    await _db.execAsync(`
      CREATE TABLE IF NOT EXISTS scene_cache (
        id         TEXT PRIMARY KEY,
        category_id TEXT NOT NULL,
        data       TEXT NOT NULL,
        cached_at  INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS meta_cache (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);

    return _db;
  } catch (e) {
    console.warn("[SceneDatabase] Failed to open SQLite:", e);
    _db = null;
    return null;
  }
}

// ── Read ──────────────────────────────────────────────────────────────────

/**
 * Returns cached scenes for a category, or null if expired/missing.
 */
export async function getScenesFromCache(
  categoryId: string,
): Promise<PresetScene[] | null> {
  const db = await getDb();
  if (!db) return null;

  try {
    const rows = await db.getAllAsync<{
      id: string;
      data: string;
      cached_at: number;
    }>(
      "SELECT id, data, cached_at FROM scene_cache WHERE category_id = ? LIMIT 1",
      [categoryId],
    );

    if (rows.length === 0) return null;

    // Check freshness by the first row's timestamp (all rows in a batch share it)
    if (Date.now() - rows[0].cached_at > CACHE_TTL_MS) {
      await clearCategoryCache(categoryId);
      return null;
    }

    // Fetch all rows for the category
    const allRows = await db.getAllAsync<{ data: string }>(
      "SELECT data FROM scene_cache WHERE category_id = ?",
      [categoryId],
    );

    return allRows.map((r) => JSON.parse(r.data) as PresetScene);
  } catch (e) {
    console.warn("[SceneDatabase] getScenesFromCache error:", e);
    return null;
  }
}

/**
 * Returns a single cached scene by ID, or null if missing/expired.
 */
export async function getSceneFromCache(
  sceneId: string,
): Promise<PresetScene | null> {
  const db = await getDb();
  if (!db) return null;

  try {
    const row = await db.getFirstAsync<{ data: string; cached_at: number }>(
      "SELECT data, cached_at FROM scene_cache WHERE id = ?",
      [sceneId],
    );

    if (!row) return null;
    if (Date.now() - row.cached_at > CACHE_TTL_MS) return null;

    return JSON.parse(row.data) as PresetScene;
  } catch (e) {
    console.warn("[SceneDatabase] getSceneFromCache error:", e);
    return null;
  }
}

// ── Write ─────────────────────────────────────────────────────────────────

/**
 * Saves a list of full scenes (with flows + turns) to SQLite.
 * Replaces any existing rows for the same category.
 */
export async function saveScenesToCache(
  categoryId: string,
  scenes: PresetScene[],
): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const now = Date.now();

  try {
    await db.withTransactionAsync(async () => {
      await db.runAsync("DELETE FROM scene_cache WHERE category_id = ?", [
        categoryId,
      ]);

      for (const scene of scenes) {
        await db.runAsync(
          "INSERT INTO scene_cache (id, category_id, data, cached_at) VALUES (?, ?, ?, ?)",
          [scene.id, categoryId, JSON.stringify(scene), now],
        );
      }
    });
  } catch (e) {
    console.warn("[SceneDatabase] saveScenesToCache error:", e);
  }
}

// ── Invalidation ──────────────────────────────────────────────────────────

export async function clearCategoryCache(categoryId: string): Promise<void> {
  const db = await getDb();
  if (!db) return;
  try {
    await db.runAsync("DELETE FROM scene_cache WHERE category_id = ?", [
      categoryId,
    ]);
  } catch (e) {
    console.warn("[SceneDatabase] clearCategoryCache error:", e);
  }
}

export async function clearAllCache(): Promise<void> {
  const db = await getDb();
  if (!db) return;
  try {
    await db.execAsync("DELETE FROM scene_cache;");
    await db.execAsync("DELETE FROM meta_cache;");
  } catch (e) {
    console.warn("[SceneDatabase] clearAllCache error:", e);
  }
}

// Version management for cache invalidation
export async function getStoredVersion(): Promise<number | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const row = await db.getFirstAsync<{ value: string }>(
      "SELECT value FROM meta_cache WHERE key = 'version'",
    );
    return row ? parseInt(row.value, 10) : null;
  } catch {
    return null;
  }
}

export async function setStoredVersion(version: number): Promise<void> {
  const db = await getDb();
  if (!db) return;
  try {
    await db.runAsync(
      "INSERT OR REPLACE INTO meta_cache (key, value) VALUES ('version', ?)",
      [String(version)],
    );
  } catch (e) {
    console.warn("[SceneDatabase] setStoredVersion error:", e);
  }
}
