import React from "react";
import Search from "./Search";
import ButtonGame from "../defaults/ButtonGame";

const NavBar = () => {
  return (
    <nav>
      <header className="flex items-center justify-between">
        <Search />
        <div className="flex items-center justify-between gap-2">
          <ButtonGame text="Sign In" link="/login" />
          <ButtonGame text="Join Now" link="/signup" />
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
