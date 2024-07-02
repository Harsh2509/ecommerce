import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { users, merchants } from "./schema";

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export type Merchat = InferSelectModel<typeof merchants>;
export type NewMerchat = InferInsertModel<typeof merchants>;
