"use client";
import { AboutSectionData } from "@/data/data";
import Image from "next/image";
import { useRef, useEffect } from "react";

const AnimatedCoder = () => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 768;
  const isMediumScreen =
    typeof window !== "undefined" &&
    window.innerWidth >= 768 &&
    window.innerWidth < 1024;
  const maxMovement = isSmallScreen ? 3 : isMediumScreen ? 4 : 6;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      [leftEyeRef, rightEyeRef].forEach((eyeRef) => {
        const eye = eyeRef.current;
        if (eye) {
          const rect = eye.getBoundingClientRect();
          const eyeCenterX = rect.left + rect.width / 2;
          const eyeCenterY = rect.top + rect.height / 2;

          const deltaX = e.clientX - eyeCenterX;
          const deltaY = e.clientY - eyeCenterY;
          const angle = Math.atan2(deltaY, deltaX);

          const translateX = Math.cos(angle) * maxMovement;
          const translateY = Math.sin(angle) * maxMovement;

          eye.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* 
        1. "relative aspect-square w-full" ensures a square container that scales with the parent width.
        2. The Image uses "fill" & "objectFit" to scale properly within this container.
      */}
      <div className="relative aspect-square w-full">
        <Image
          src={AboutSectionData.animatedImg}
          alt="Coder Outline"
          fill
          style={{ objectFit: "contain", transform: "scaleX(-1)" }}
        />
        {/* 
          3. Absolute positioning inside the same container.
             The percentage values (top/left) should match the eyes' position on the SVG.
        */}
        <div
          ref={leftEyeRef}
          className="absolute bg-gray-800 rounded-full   w-2 h-2 xl:w-3 xl:h-3"
          style={{ top: "47%", left: "49%" }}
        />
        <div
          ref={rightEyeRef}
          className="absolute bg-gray-800 rounded-full  w-2 h-2 xl:w-3 xl:h-3"
          style={{ top: "47%", left: "57%" }}
        />
      </div>
    </>
  );
};

export default AnimatedCoder;
