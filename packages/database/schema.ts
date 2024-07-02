import { text } from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  name: text("name").notNull(),
  number: text("number").notNull().unique(),
  password: text("password").notNull(),
});

export const merchants = pgTable("merchants", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  name: text("name").notNull(),
  auth_type: text("auth_type").notNull(),
});
