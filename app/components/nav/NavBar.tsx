"use client";
import React from "react";
import Search from "./Search";
import ButtonGame from "../defaults/ButtonGame";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { logoutUser } from "@/app/store/user/auth/authThunks";
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { clearUser } from "@/app/store/user/auth/authSlice";

const NavBar = () => {
  const { error, isAuthenticated, loading, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav>
      <header className="flex items-center justify-between">
        <Search />
        <div className="flex items-center justify-between gap-2">
          {isAuthenticated ? (
            <div className="flex gap-4 items-center">
              <p>{user?.emailId}</p>
              <LuLogOut
                className="cursor-pointer text-2xl"
                onClick={() => dispatch(clearUser())}
              />
              <IoSettingsOutline className="cursor-pointer text-2xl" />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <ButtonGame text="Sign In" link="/login" />
              <ButtonGame text="Join Now" link="/signup" />
            </div>
          )}
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
