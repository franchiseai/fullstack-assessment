import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";
import path from "path";
import fs from "fs";

const dbPath = process.env.DB_PATH || path.join(process.cwd(), "data", "apod.db");

// Ensure the data directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
