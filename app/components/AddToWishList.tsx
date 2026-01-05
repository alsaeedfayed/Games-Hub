"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "../contexts/WishListContext";

const AddToWishList = ({ gameId }: { gameId: string }) => {
  const { toggle, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(gameId);

  return (
    <Button
      onClick={() => toggle(gameId)}
      className={`px-4 py-2 rounded ${
        inWishlist ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {inWishlist ? "Remove from Wish List" : "Add to Wish List"}
    </Button>
  );
};

export default AddToWishList;
// }; This component uses a custom hook `UseLocalStorageState` to manage the wish list state in local storage. It checks if the current game ID is already in the wish list and updates the button text and style accordingly. When the button is clicked, it either adds or removes the game ID from the wish list in local storage. The component returns a button that allows users to add or remove games from their wish list.
