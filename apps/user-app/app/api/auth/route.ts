import { db, eq, users } from "@repo/database";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  //checking if user exists
  const { email, password }: { email: string; password: string } =
    await req.json();
  const userz = await db.select().from(users).where(eq(users.email, email));

  // if user does not exist, create user
  if (userz.length === 0) {
    const hashedPw = await bcrypt.hash(password, 10);
    await db.insert(users).values({ email, password: hashedPw });
    return Response.json({ token: "xyz" });
  }

  // Checking user's password.
  if (userz !== undefined && userz[0] !== undefined) {
    const verify = await bcrypt.compare(password, userz[0].password);
    if (!verify) {
      return Response.json({ error: "Invalid email or password" });
    }
    // We can definitely improve this by using JWT or something similar.
    return Response.json({ token: "xyz" });
  } else {
    return Response.json({ error: "Invalid email or password" });
  }
};

export const GET = async (req: Request) => {
  const userz = await db.select().from(users);
  return Response.json(userz);
};
