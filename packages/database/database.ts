import * as dotenv from "dotenv";
import * as schema from "./schema";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

dotenv.config();

const connectionString = process.env.DATABASE_URL || "";
const client = postgres(connectionString);

export const db = drizzle(client, { schema });
