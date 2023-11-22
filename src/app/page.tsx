"use client";

import { useTheme } from "next-themes";
import { GiMountainRoad, GiUpgrade } from "react-icons/gi";
import { IoRocket } from "react-icons/io5";
import Header from "../components/Header";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Section 1 */}
      <div className="flex-col 	h-full">
        <div className="flex flex-col sm:flex-row items-center ">
          <div className="flex flex-col  text-start gap-5">
            <h1 className="text-3xl sm:text-6xl text-[#0E7A80] dark:text-[#31EBF5]">
              Hello!
              <br /> I&apos;m Ammar Mohammed
            </h1>
            <div className="text-base sm:text-xl gap-1">
              <p className="flex flex-row items-center">
                I love creating and innovating{" "}
                <IoRocket className="mx-2 text-[#0E7A80] dark:text-[#31EBF5]" />
              </p>
              <p className="flex flex-row items-center">
                I&apos;m constantly learning and improving
                <GiUpgrade className="mx-2 text-[#0E7A80] dark:text-[#31EBF5]" />
              </p>
              <p className="flex flex-row items-center">
                Always prepared to leave my mark on the world
                <GiMountainRoad className="mx-2 text-[#0E7A80] dark:text-[#31EBF5]" />
              </p>
            </div>
          </div>
          <img
            className="sm:h-[475px]"
            src={
              theme === "dark"
                ? "/illustration edit DM.png"
                : "/illustration edit LM.png"
            }
            alt=""
          />
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col snap-start h-full sm:h-screen py-5 gap-5">
        <h1 className="text-3xl sm:text-6xl text-[#0E7A80] dark:text-[#31EBF5] ">
          About me
        </h1>
        <div className="flex flex-col sm:flex-row  gap-5">
          <img
            className="sm:w-80 sm:h-96 rounded-3xl boxShadow"
            src="Photo.png"
            alt=""
          />
          <div className="flex flex-col ">
            <p className="p-3 text-xl font-semibold text-[#0E7A80] dark:text-[#31EBF5]">
              Insights into me
            </p>
            <div className="mb-3 h-fit p-3 text-base sm:text-lg rounded-3xl bg-[#DAE2E3] dark:bg-[#31323B] boxShadow">
              I&apos;m a Frontend Web Developer who is excited to create and
              working with people. I love building and making progress, and I
              always try to employ, refine, and expand my skill set can to
              improve myself and reach the peak of my potential. <br />
              I&apos;m prepared to offer my skill and help you!
            </div>
            <p className="p-3 text-xl font-semibold text-[#0E7A80] dark:text-[#31EBF5]">
              My Skills
            </p>
            <Skills displayAll={true} />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex flex-col w-full snap-start justify-start text-start h-full sm:h-screen py-10 sm:gap-5">
        <h1 className="text-3xl sm:text-6xl text-[#0E7A80] dark:text-[#31EBF5] ">
          My Featured Projects
        </h1>
        <div className="flex flex-row w-full h-full ">
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
}
