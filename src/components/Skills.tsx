import React from "react";
import {
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";
type skillsProps = {
  displayAll: boolean;
  usedSkills?: string[];
  usedTools?: string[];
};
export default function Skills({
  displayAll,
  usedSkills,
  usedTools,
}: skillsProps) {
  const skills = [
    { icon: <SiReact />, label: "React.js" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiNextdotjs />, label: "Next.js" },
  ];
  const tools = [
    { icon: <SiTailwindcss />, label: "TailwindCSS" },
    { icon: <SiVercel />, label: "Vercel" },
  ];
  return (
    <div className="h-fit px-1.5 py-3 rounded-3xl  bg-[#DAE2E3] dark:bg-[#31323B] boxShadow">
      {displayAll ? (
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-1.5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-lg sm:text-3xl text-[#0E7A80] dark:text-[#31EBF5] gap-1"
            >
              {skill.icon}
              <p className="text-xl text-black dark:text-white">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 ">
          {skills
            .filter((skill) => usedSkills?.includes(skill.label))
            .map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-lg sm:text-2xl text-[#0E7A80] dark:text-[#31EBF5] gap-1"
              >
                {skill.icon}
                <p className="text-lg text-black dark:text-white">
                  {skill.label}
                </p>
              </div>
            ))}
          {tools
            .filter((skill) => usedTools?.includes(skill.label))
            .map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-lg sm:text-2xl text-[#0E7A80] dark:text-[#31EBF5] gap-1"
              >
                {skill.icon}
                <p className="text-base sm:text-lg text-black dark:text-white">
                  {skill.label}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
