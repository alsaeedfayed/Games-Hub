"use client";
import React from "react";
import UseLocalStorageState from "../hooks/UseLocalStorageState";
import { Button } from "@/components/ui/button";

const AddToWishList = ({ gameId }: { gameId: string }) => {
  const [wishListLocal, setWishListLocal] = UseLocalStorageState(
    "wishList",
    []
  );
  const isInWishList = wishListLocal.includes(gameId);
  const handleAddToWishList = () => {
    if (isInWishList) {
      setWishListLocal(wishListLocal.filter((id: string) => id !== gameId));
    } else {
      setWishListLocal([...wishListLocal, gameId]);
    }
    console.log(wishListLocal);
  };
  return (
    <Button
      onClick={handleAddToWishList}
      className={`px-4 py-2 rounded ${
        isInWishList ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {isInWishList ? "Remove from Wish List" : "Add to Wish List"}
    </Button>
  );
};

export default AddToWishList;
// }; This component uses a custom hook `UseLocalStorageState` to manage the wish list state in local storage. It checks if the current game ID is already in the wish list and updates the button text and style accordingly. When the button is clicked, it either adds or removes the game ID from the wish list in local storage. The component returns a button that allows users to add or remove games from their wish list.
