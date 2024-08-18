import { text } from "drizzle-orm/pg-core";
import { pgTable, integer, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
});

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  userId: serial("userId").references(() => users.id),
  productId: serial("productId"),
  quantity: integer("quantity").notNull(),
});
