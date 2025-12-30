import { div } from "motion/react-client";
import { searchGames } from "../api/api";
import Hero from "../components/Hero";
import { IGame } from "../models/games.model";
import Image from "next/image";
import SwiperCards from "../components/SwiperCard";
import Link from "next/link";

export default async function Home() {
  //use fetch to get data from rawg api
  const { data } = await searchGames("", 1, [], 10);
  const games: IGame[] = data.results;
  console.log(games);
  return (
    <main>
      <Hero />
      <div className="mt-8">
        <SwiperCards
          className="h-full"
          slidesPerView={4}
          items={
            games &&
            games.map((game: IGame) => {
              return {
                card: (
                  <Link
                    href={`/game/${game.id}`}
                    key={game.id}
                    className="cursor-pointer group"
                  >
                    <div className="after:absolute after:inset-0 after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-black after:to-transparent w-full h-64 rounded-2xl overflow-hidden relative">
                      <Image
                        className="group-hover:scale-125 group-hover:rotate-6 duration-200 object-cover"
                        src={game.background_image}
                        alt={game.name}
                        fill
                      />
                    </div>
                    <h1 className="text-base line-clamp-1 mt-2 text-white font-semibold">
                      {game.name}
                    </h1>
                  </Link>
                ),
              };
            })
          }
        />
      </div>
    </main>
  );
}
