import { useQueries } from "@tanstack/react-query";
import React from "react";
import { getGame } from "../api/api";

const useWishListGamesQuery = (ids: string[] | number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["game", id],
      queryFn: () => getGame(id),
      enabled: !!id,
      staleTime: 1000 * 60 * 5, // 5 minutes
    })),
  });
};

export default useWishListGamesQuery;

/**
 * Why useQueries Is the Right Mental Model

Each game is cached individually

Adding/removing IDs auto-fetches or removes queries

Already-fetched games load instantly

Partial failures don’t kill everything

Visit a game page first → wishlist page is instant

Remove an ID → no refetch needed

Add it back → data comes from cache
 */
