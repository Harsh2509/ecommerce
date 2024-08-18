import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Coupon = {
  code: string;
  discountPercentage: number;
};

type CartSummaryProps = {
  totalCost: number;
  availableCoupons: Coupon[];
};

export const CartSummary: React.FC<CartSummaryProps> = ({
  totalCost,
  availableCoupons,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalCost, setFinalCost] = useState(totalCost);
  const router = useRouter();

  const applyDiscount = () => {
    const coupon = availableCoupons.find(
      (c) => c.code.toLowerCase() === couponCode.toLowerCase()
    );
    if (coupon) {
      const discountAmount = (totalCost * coupon.discountPercentage) / 100;
      setDiscount(discountAmount);
      setFinalCost(totalCost - discountAmount);
    } else {
      setDiscount(0);
      setFinalCost(totalCost);
    }
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log("Proceeding to checkout...");
    router.push("/checkout");
  };

  return (
    <div className="max-w-md mx-auto my-6 bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Order Summary
      </h2>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal:</span>
        <span className="text-gray-800">${totalCost.toFixed(2)}</span>
      </div>
      {discount > 0 && (
        <div className="flex justify-between mb-2 text-green-600">
          <span>Discount:</span>
          <span>- ${discount.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total:</span>
        <span>${finalCost.toFixed(2)}</span>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 border border-gray-300 rounded-l px-3 py-2"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-500"
          onClick={applyDiscount}
        >
          Apply
        </button>
      </div>
      <button
        className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-500"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};
