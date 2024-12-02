import { create } from 'zustand';
import { Product, CartItem, User } from '../types';

interface Store {
  products: Product[];
  cart: CartItem[];
  user: User | null;
  setProducts: (products: Product[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setUser: (user: User | null) => void;
}

export const useStore = create<Store>((set) => ({
  products: [],
  cart: [],
  user: null,
  setProducts: (products) => set({ products }),
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.productId === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cart: [...state.cart, { productId: product.id, quantity: 1, product }],
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })),
  setUser: (user) => set({ user }),
}));