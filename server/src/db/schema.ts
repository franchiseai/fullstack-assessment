import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const collections = sqliteTable("collections", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const images = sqliteTable("images", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  collectionId: integer("collection_id")
    .notNull()
    .references(() => collections.id, { onDelete: "cascade" }),
  date: text("date").notNull(),
  title: text("title").notNull(),
  url: text("url").notNull(),
  hdurl: text("hdurl"),
  explanation: text("explanation").notNull(),
  mediaType: text("media_type").notNull().default("image"),
  copyright: text("copyright"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});
