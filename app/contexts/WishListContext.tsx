"use client";
import React, { createContext, useContext } from "react";
import UseLocalStorageState from "@/app/hooks/UseLocalStorageState";

type WishlistContextType = {
  wishlist: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  isInWishlist: (id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = UseLocalStorageState<string[]>(
    "wishList",
    []
  );

  const add = (id: string) => {
    setWishlist((prev: string[]) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const remove = (id: string) => {
    setWishlist((prev: string[]) => prev.filter((item) => item !== id));
  };

  const toggle = (id: string) => {
    setWishlist((prev: string[]) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  return (
    <WishlistContext.Provider
      value={{ wishlist, add, remove, toggle, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
