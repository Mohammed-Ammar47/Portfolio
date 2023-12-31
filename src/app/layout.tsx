import type { Metadata } from "next";
import { Inter, Oswald, Rubik } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Provider from "./Provider";
import ThemeButton from "../components/ThemeButton";
import Image from "next/image";
import Header from "@/components/Header";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ammar Mohammed",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${oswald.className} bg-[#E6EFF0] dark:bg-[#27282F] snap-start px-8 sm:px-36`}
      >
        <Provider>
          <Header />
          <main className="">{children}</main>
          <footer className="flex flex-col w-full snap-start justify-center text-center py-10 gap-5 border-t-2 border-[#0E7A80] dark:border-[#31EBF5] ">
            <p className="text-lg text-black dark:text-white">Get in touch</p>
            <div className="flex flex-row gap-5 justify-center text-center">
              <FaLinkedin className="text-[#0E7A80] dark:text-[#31EBF5] text-4xl" />
              <FaFacebookSquare className="text-[#0E7A80] dark:text-[#31EBF5] text-4xl" />
              <FaGithubSquare className="text-[#0E7A80] dark:text-[#31EBF5] text-4xl" />
            </div>
          </footer>
        </Provider>
      </body>
    </html>
  );
}
