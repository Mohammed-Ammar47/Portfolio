import PreviewImage from "@/components/PreviewImage";
import Skills from "@/components/Skills";
import Link from "next/link";
import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";

export default function ProjectPage() {
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
        "I built my own realtor website for selling or renting property, fully functional and responsive, users can either add posts for providing the service or contact the owner for purchase, with addition of firebase for database and authentication.",
      image: "Projects/P-RK.png",
      link: "https://realtor-knights.vercel.app/",
    },
    {
      id: 3,
      title: "The App Book",
      usedSkills: ["React.js", "TypeScript"],
      usedTools: ["Vercel", "TailwindCSS"],
      description:
        "I built a web application that encompasses multiple small apps i built overtime using typescript ",
      image: "Projects/P-TAB.png",
      link: "https://the-app-book.vercel.app/",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-3 py-5 sm:py-20">
      {/* Section 1 */}
      <div className="flex-col snap-star ">
        <ul className="h-full flex-col  flex w-full gap-5 py-5  sm:space-y-10 boxShadow">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col sm:flex-row justify-between "
            >
              <div
                key={project.id}
                className="sm:basis-5/12 px-4 sm:py-7 flex flex-col justify-between"
              >
                <div>
                  <p className="p-3 text-xl font-semibold text-[#0E7A80] dark:text-[#31EBF5]">
                    {project.title}
                  </p>
                  <Skills
                    displayAll={false}
                    usedSkills={project.usedSkills}
                    usedTools={project.usedTools}
                  />
                  <p className=" h-fit py-3 sm:text-lg ">
                    {project.description}
                  </p>
                </div>
                <button className=" w-fit sm:text-lg  rounded-full px-5 py-1 text-center font-medium text-[#0E7A80] dark:text-[#31EBF5] ring-1 ring-black dark:ring-white hover:bg-[#0E7A80] hover:text-black dark:hover:bg-[#31EBF5] dark:hover:text-white ">
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
      </div>{" "}
    </div>
  );
}
