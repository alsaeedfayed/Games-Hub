"use client";
import React from "react";
import Search from "./Search";
import ButtonGame from "../defaults/ButtonGame";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { logoutUser } from "@/app/store/user/auth/authThunks";

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav>
      <header className="flex items-center justify-between">
        <Search />
        <div className="flex items-center justify-between gap-2">
          <ButtonGame text="Sign In" link="/login" />
          <ButtonGame text="Join Now" link="/signup" />
          <ButtonGame text="Logout" onClick={() => dispatch(logoutUser())} />
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
