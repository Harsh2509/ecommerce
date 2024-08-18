import { db, eq, users, cart, and } from "@repo/database";

// This route adds products to the cart
export const POST = async (req: Request) => {
  //checking if user exists
  const { userId, productId }: { userId: string; productId: string } =
    await req.json();
  const userz = await db
    .select()
    .from(users)
    .where(eq(users.id, parseInt(userId)));

  if (userz.length === 0) {
    return Response.json({ error: "User doesn't exist" });
  }

  const product = await db
    .select()
    .from(cart)
    .where(
      and(
        eq(cart.productId, parseInt(productId)),
        eq(cart.userId, parseInt(userId))
      )
    );

  // if user exists, add product to cart if it doesn't exist
  if (product.length == 0) {
    await db.insert(cart).values({
      userId: parseInt(userId),
      productId: parseInt(productId),
      quantity: 1,
    });
    return Response.json({ message: "Product added to cart" });
  }
  return Response.json({ error: "Product already in cart" });
};

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  if (userId === null) {
    return Response.json({ error: "userId is required" });
  }

  const cartItems = await db
    .select({ id: cart.id, productId: cart.productId, quantity: cart.quantity })
    .from(cart)
    .where(eq(cart.userId, parseInt(userId)));

  return Response.json(cartItems);
};

export const PUT = async (req: Request) => {
  const {
    userId,
    productId,
    quantity,
  }: { userId: string; productId: string; quantity: string } = await req.json();

  const product = await db
    .select()
    .from(cart)
    .where(
      and(
        eq(cart.productId, parseInt(productId)),
        eq(cart.userId, parseInt(userId))
      )
    );

  if (product.length == 0) {
    return Response.json({ error: "Product not found in cart" });
  }

  await db
    .update(cart)
    .set({ quantity: parseInt(quantity) })
    .where(
      and(
        eq(cart.productId, parseInt(productId)),
        eq(cart.userId, parseInt(userId))
      )
    );

  return Response.json({ message: "Quantity updated" });
};
