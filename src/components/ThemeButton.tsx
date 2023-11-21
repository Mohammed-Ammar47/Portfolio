"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="relative flex flex-wrap items-center mr-2.5">
      <input
        className="after:absolute after:top-0 peer relative h-5 w-9 cursor-pointer appearance-none rounded-2xl ring-2 ring-inset ring-slate-300 transition-colors after:left-0 after:h-5 after:w-5 after:rounded-full after:bg-white after:ring-2 after:ring-inset after:ring-slate-500 after:transition-all checked:bg-[#1AA6AD] checked:ring-[#1AA6AD] checked:after:left-4 checked:after:bg-[#27282F] checked:after:ring-[#1AA6AD] hover:ring-slate-400 after:hover:ring-slate-600 checked:hover:bg-[#1AA6AD] checked:hover:ring-[#31EBF5] checked:after:hover:ring-[#31EBF5] focus:outline-none  checked:focus:bg-[#31EBF5]  checked:focus:ring-[#31EBF5] checked:after:focus:ring-[#31EBF5] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-200 disabled:after:ring-slate-300"
        type="checkbox"
        defaultChecked={theme === "light" ? false : true}
        onChange={(e) => {
          e.target.checked === false ? setTheme("light") : setTheme("dark");
        }}
        id="id-c01s"
      />
      <label
        className="hidden sm:visible cursor-pointer pl-2 text-[#0E7A80] dark:text-[#31EBF5] font-medium peer-disabled:cursor-not-allowed "
        htmlFor="id-c01s"
      >
        {theme === "light" ? "Light mode" : "Dark mode"}
      </label>
    </div>
  );
}
