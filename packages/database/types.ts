import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { cart, users } from "./schema";

// This is a type definition file that exports the types of the models defined in the schema file.
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export type Cart = InferSelectModel<typeof cart>;
export type NewCart = InferInsertModel<typeof cart>;
