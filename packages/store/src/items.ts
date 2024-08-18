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
};

export const itemsStore = create((set) => ({
  items: [] as Product[],
  setItems: (itemss: Product[]) => {
    console.log(itemss);
    set({ items: itemss });
  },
  updateItem: (id: number, updatedItem: Partial<Product>) =>
    set((state: any) => ({
      items: state.items.map((item: Product) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    })),
}));
