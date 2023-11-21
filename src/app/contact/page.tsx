import ContactForm from "@/components/ContactForm";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col sm:flex-row items-center py-12 divide-y-2 sm:divide-y-0 divide-x-0 sm:divide-x-2 divide-[#0E7A80] dark:divide-[#31EBF5] ">
      <div className="basis-1/2 p-5 space-y-3 ">
        <p className="text-base sm:text-lg">
          Do you have something specific in mind?
        </p>
        <h1 className="text-3xl sm:text-5xl text-[#0E7A80] dark:text-[#31EBF5]">
          Contact me
        </h1>
        <p className="text-base sm:text-lg">
          Should you have a project in mind or seek additional information on
          Frontend web development or Graphic design, please don't hesitate to
          get in touch with me.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
