"use client";
import React, { ReactElement } from "react";
import ButtonSvg from "../nav/ButtonSvg";
import Link from "next/link";
import Spinner from "./Spinner";
const ButtonGame = ({
  className,
  onClick,
  link,
  text,
  icon,
  disabled = false,
}: {
  className?: string;
  onClick?: () => void;
  link?: string;
  text: string;
  icon?: ReactElement;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${
        className || ""
      } hover:text-rose-400 duration-150 min-w-[100px] relative px-6 flex gap-2 py-2.5 text-center m-auto border-1 border-rose-400 rounded-tr-xl font-semibold  items-center justify-center`}
      disabled={disabled}
      onClick={() => void (onClick && onClick())}
    >
      {ButtonSvg(false)}
      <span className=" relative">
        {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
      </span>

      {icon && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ButtonGame;
