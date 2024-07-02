import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./database";

migrate(db, { migrationsFolder: "./drizzle" })
  .then(() => {
    console.log("Migration Finished!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
