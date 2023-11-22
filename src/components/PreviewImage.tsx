import React from "react";
type imgProps = { image: string };
export default function PreviewImage({ image }: imgProps) {
  return (
    <div className=" sm:basis-6/12 flex items-center w-full overflow-hidden py-3 sm:py-0">
      <img
        className="boxShadow bg-gradient-to-tl from-75%  to-100% from-[#0e7a808c] to-[#0E7A80] dark:from-[#31ebf584] dark:to-[#31EBF5] rounded-2xl"
        src={image}
        alt=""
      />
    </div>
  );
}
