"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ExtendedCard } from "../../components/ExtendedCard";
import axios from "axios";

const navigation = [
  { name: "Cart", href: "/cart", current: true },
  { name: "Checkout", href: "/cart", current: false },
  { name: "Payment", href: "/cart", current: false },
  { name: "Confirmation", href: "/cart", current: false },
];

type CartItem = {
  id: number;
  productId: number;
  quantity: number;
};

export const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    axios.get("/api/cart?userId=" + userId).then((res) => {
      setCartItems(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar navigation={navigation} />
      <div className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <ExtendedCard key={item.id} cartItem={item} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
