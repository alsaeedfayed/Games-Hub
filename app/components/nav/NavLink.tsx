"use client";
import Link from "next/link";
import React from "react";
import { NavBarItem } from "./SideBar";
import { usePathname } from "next/navigation";

const NavLink = ({ navLink }: { navLink: NavBarItem }) => {
  const { link, label, icon } = navLink;
  //Active link logic
  const pathName = usePathname(); //hook to get current path only in client component
  const isActive = pathName === link;
  return (
    <Link
      href={link}
      className={`flex gap-2 items-center p-2 my-2 rounded-md ${
        isActive ? "text-rose-400" : "text-gray-50"
      } duration-150 hover:transform hover:scale-105 hover:text-rose-300`}
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
