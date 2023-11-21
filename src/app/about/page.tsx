import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center gap-3 divide-y-2 divide-[#0E7A80] dark:divide-[#31EBF5] ">
      {/* Section 1 */}
      <div className="flex-col	h-full py-10">
        <div className="flex flex-col sm:flex-row justify-center items-center h-full sm:mx-10">
          <div className="flex flex-col text-start gap-3 py-3">
            <h1 className="text-3xl sm:text-5xl text-[#0E7A80] dark:text-[#31EBF5] ">
              Ammar Mohammed
            </h1>
            <p className="text-base sm:text-lg">
              I am passionate about creativity and innovation, perpetually
              engaged in learning and enhancement, and ever ready to make a
              lasting impact on the world.
            </p>
          </div>{" "}
          <img
            className="sm:w-80 sm:h-96 rounded-[3rem] shadow-[-15px_15px_50px_-25px_#0E7A80] dark:shadow-[15px_15px_50px_-25px_#31EBF5]"
            src="Photo.png"
          />
        </div>
      </div>
      <div className="flex-col snap-start  py-10 space-y-5">
        <h1 className="text-3xl sm:text-5xl text-[#0E7A80] dark:text-[#31EBF5] ">
          About me
        </h1>
        <p>
          I am Mohammed Ammar, a mechanical engineer with mechanical production
          engineering degree. I thrive in problem-solving, teamwork and I'm very
          serious when it comes to work, and I'm dedicated to improving and
          learning new skills that brings benefit in my personal and work life.
          Throughout my school years, I have undergone couple internships in
          different companies, which has offered me very valuable insights.
          <br />
          while I was at school, I got into the world of coding and started
          learning html, CSS, and JavaScript stuck with it until I grow my
          skills and became a web developer. then slowly improved my skill by
          learning new technologies and libraries and gained knowledge on in UI
          & UX Design.
          <br />I am excited to bring my skills and enthusiasm to you and
          contribute to achieve great heights.
        </p>
        <div className="flex flex-row justify-center items-center gap-3">
          <button className=" w-fit sm:text-lg  rounded-full px-5 py-1 text-center font-medium text-[#0E7A80] dark:text-[#31EBF5] ring-1 ring-black dark:ring-white hover:bg-[#0E7A80] hover:text-black dark:hover:bg-[#31EBF5] dark:hover:text-white ">
            <Link className="flex items-center" href="/contact">
              <p>Contact me</p>
            </Link>
          </button>{" "}
          <button className=" w-fit sm:text-lg  rounded-full px-5 py-1 text-center font-medium text-[#0E7A80] dark:text-[#31EBF5] ring-1 ring-black dark:ring-white hover:bg-[#0E7A80] hover:text-black dark:hover:bg-[#31EBF5] dark:hover:text-white ">
            <Link
              className="flex items-center"
              href="https://drive.google.com/file/d/1KhUSJg001HWHzqr9hyXeX1Rqt_UOc17A/view?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>Read resume</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
