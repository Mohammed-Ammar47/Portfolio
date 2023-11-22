"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeButton from "./ThemeButton";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <header className="flex sm:flex-row py-5 justify-between">
      <img
        src="/ammar-mohammed-high-resolution-logo-transparent.png"
        className="h-8 sm:h-14"
        alt=""
      />
      <nav className="container flex gap-5 justify-end ">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl absolute right-2.5 top-5 cursor-pointer sm:hidden  rounded-md hover:bg-gray-100 "
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
        <div
          className={`bg-[#E6EFF0] dark:bg-[#27282F] right-0  p-3 sm:p-0 absolute  sm:relative sm:flex sm:flex-row sm:gap-3 md:z-auto z-[ w-full md:w-auto md:pl-0  sm:bg-transparent transition-all duration-300 ease-in-out ${
            open ? "top-16  " : "top-[-280px] sm:top-px"
          }`}
        >
          <ul className="flex flex-col sm:flex-row items-center gap-2 divide-y-2 sm:divide-y-0 divide-[#0E7A80] dark:divide-[#31EBF5] ">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-lg  px-2 py-1 text-center font-medium"
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <ThemeButton />
      </nav>
    </header>
  );
}
