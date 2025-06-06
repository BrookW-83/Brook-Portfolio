import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const ArrowButton = () => {
  return (
    <Link
      href={"#skills"}
      className="hidden lg:flex w-16 h-16 justify-self-center mx-auto text-tertiary rounded-full border-2 border-tertiary/20 justify-center items-center"
    >
      <ArrowDown
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("skills");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="w-8 h-8 animate-bounce duration-700 group-hover:animate-none"
      />
    </Link>
  );
};

export default ArrowButton;
