import { create } from "zustand";

type Rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  productId: number;
  quantity: number;
};

export const useStore = create((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  updateProduct: (index: number, product: Product) =>
    set((state: any) => {
      const products = [...state.products];
      products[index] = product;
      return { products };
    }),
}));
