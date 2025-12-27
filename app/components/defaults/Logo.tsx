import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-xl md:text-xl flex gap-2 mb-4">
      <span className="text-rose-500 font-bold text-xl uppercase">Games</span>
      <span className="font-semibold text-white">Hub</span>
    </Link>
  );
};

export default Logo;
