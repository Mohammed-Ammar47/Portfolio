import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import PreviewImage from "./PreviewImage";
import Skills from "./Skills";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";

export default function FeaturedProjects() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      animationDuration: 700,
      gap: 0,
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  const projects = [
    {
      id: 0,
      title: "Healthy & Happy",
      usedSkills: ["React.js", "Firebase"],
      usedTools: ["Vercel", "TailwindCSS"],
      description:
        "I have built a responsive blog website in which users can browse and discover recipes and read cooking related articles, this website has multiple topic pages, and each article can be added rated, bookmarked and commented after authentication.",
      image: "Projects/P-H&H.png",
      link: "https://healthy-and-happy.vercel.app/",
    },
    {
      id: 1,
      title: "Sighted Fresh",
      usedSkills: ["React.js", "Firebase"],
      usedTools: ["Vercel", "TailwindCSS"],
      description:
        "I built my own e-Commerce website for selling clothes, fully functional and responsive with store and sales pages, search, filters and cart page, with addition of firebase for database and authentication. ",
      image: "Projects/P-SF.png",
      link: "https://sighted-fresh.vercel.app/",
    },
    {
      id: 2,
      title: "Realtor Knights",
      usedSkills: ["React.js", "Firebase"],
      usedTools: ["Vercel", "TailwindCSS"],
      description:
        "I built my own realtor website for selling or renting property, fully functional and responsive, users can either add posts for providing the service or contact the owner for purchase, with addition of firebase for database and authentication. ",
      image: "Projects/P-RK.png",
      link: "https://realtor-knights.vercel.app/",
    },
  ];
  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className=" glide-01 relative  w-full h-full ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden h-full w-full " data-glide-el="track">
          <ul className="h-full w-full whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {projects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col sm:flex-row justify-between"
              >
                <div className="sm:basis-5/12 px-1 sm:px-4 sm:py-7 flex flex-col justify-between">
                  <div>
                    <p className="p-3 text-xl font-semibold text-[#0E7A80] dark:text-[#31EBF5]">
                      {project.title}
                    </p>
                    <Skills
                      displayAll={false}
                      usedSkills={project.usedSkills}
                      usedTools={project.usedTools}
                    />
                    <p className=" h-fit p-1.5 sm:p-3 text-base sm:text-lg ">
                      {project.description}
                    </p>
                  </div>
                  <button className=" w-fit text-base sm:text-lg  rounded-full px-5 py-1 text-center font-medium text-[#0E7A80] dark:text-[#31EBF5] ring-1 ring-black dark:ring-white hover:bg-[#0E7A80] hover:text-black dark:hover:bg-[#31EBF5] dark:hover:text-white ">
                    <Link
                      className="flex items-center"
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <p>Visit website</p>
                      <RiExternalLinkFill />
                    </Link>
                  </button>
                </div>
                <PreviewImage image={project.image} />
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 sm:flex h-0 w-full items-center justify-between hidden sm:visible "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full   ring-slate-200 bg-white/25  transition duration-300 hover:ring-slate-600  focus-visible:outline-none lg:h-12 lg:w-12 pr-1"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <IoIosArrowBack className="text-4xl text-[#0E7A80] dark:text-[#31EBF5] " />
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full   ring-slate-200 bg-white/25  transition duration-300 hover:ring-slate-600  focus-visible:outline-none lg:h-12 lg:w-12 pl-1"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <IoIosArrowForward className="text-4xl text-[#0E7A80] dark:text-[#31EBF5] " />
          </button>
        </div>
      </div>
    </>
  );
}
