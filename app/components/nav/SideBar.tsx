import React, { ReactElement } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import NavLink from "./NavLink";
import Logo from "../defaults/Logo";
import ButtonGame from "../defaults/ButtonGame";

export type NavBarItem = {
  label: string;
  link: string;
  icon: ReactElement;
};

export const NAV_LINKS: NavBarItem[] = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <MdDashboard />,
  },
  {
    link: "/wishlist",
    label: "WIshlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
];
const SideBar = () => {
  return (
    <div className="col-span-2">
      <div className="py-5 px-10 h-screen flex flex-col items-start sticky inset-0 text-gray-50 bg-black/30">
        <Logo />
        {NAV_LINKS.map((navLink) => (
          <NavLink key={navLink.link} navLink={navLink} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
