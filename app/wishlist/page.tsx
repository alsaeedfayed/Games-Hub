"use client";
import Link from "next/link";
import React from "react";
import { useWishlist } from "../contexts/WishListContext";
import useWishListGamesQuery from "../tanstack-queries/useWishListGamesQuery";
import { Skeleton } from "@/components/ui/skeleton";
import { IGame } from "../models/games.model";

const WishList = () => {
  const { wishlist } = useWishlist();
  const queries = useWishListGamesQuery(wishlist);
  const games: IGame[] = [];
  queries.map((q) => {
    //console.log(q.data?.data);
    games.push(q.data?.data);
  });
  //console.log(games);
  if (!wishlist.length)
    return <p className="h-screen bg-gray-600">No games in wishlist</p>;
  const isLoading = queries.some((q) => q.isLoading);
  const hasError = queries.some((q) => q.isError);
  if (isLoading)
    return (
      <div className="flex flex-col space-y-3 h-screen bg-gray-600">
        <Skeleton className="h-[40%] w-full rounded-xl" />
        <Skeleton className="h-[40%] w-full rounded-xl" />
      </div>
    );

  return (
    <div className="h-screen bg-gray-600">
      {games.map((game) => (
        <h1 key={game.id}>{game.name}</h1>
      ))}
    </div>
  );
};

export default WishList;
