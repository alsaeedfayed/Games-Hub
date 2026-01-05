import { div } from "motion/react-client";
import { getGamesByIds, searchGames } from "../api/api";
import Hero from "../components/Hero";
import { IGame } from "../models/games.model";
import Image from "next/image";
import SwiperCards from "../components/SwiperCard";
import Link from "next/link";
import GamesSlider from "../components/GameSlider";

export default async function Home() {
  //use fetch to get data from rawg api
  const { data } = await searchGames("", 1, [], 10);
  const ps5 = await searchGames(
    "",
    1,
    [
      { filterName: "platforms", option: "187" },
      {
        filterName: "ordering",
        option: "-metacritic",
      },
    ],
    10
  );
  const pc = await searchGames(
    "",
    1,
    [{ filterName: "platforms", option: "4" }],
    10
  );

  const customGames = await getGamesByIds([
    "799265",
    "58550",
    "2462",
    "494384",
    "452642",
    "452634",
  ]);

  const games: IGame[] = data.results;
  // console.log(games);
  return (
    <main>
      <Hero />
      <GamesSlider title="Top Games for PS5" games={ps5.data.results} />
      <GamesSlider
        screenBig
        big
        slidesPerView={2}
        title="PLAYSTATION EXCLUSIVES"
        games={customGames.map((game) => game.data)}
      />
      <GamesSlider title="Top Games" games={games} />
    </main>
  );
}
