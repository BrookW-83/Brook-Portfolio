"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { menuItems } from "@/data/data";

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const menuControls = useAnimation();
  const lineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Calculate positions for menu items to appear as line passes through
  useEffect(() => {
    if (isHovered && lineRef.current && navRef.current) {
      const sequence = async () => {
        await menuControls.start("lineExtend");
        await menuControls.start("showItems");
      };
      sequence();
    } else {
      menuControls.start("hidden");
    }
  }, [isHovered, menuControls]);
  // Track scroll position to add shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page is loaded at a scrolled position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 w-full z-50 bg-background transition-all duration-300 ease-in-out",
        hasScrolled && "shadow-lg shadow-black/50"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={navRef}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between h-16 relative">
        {/* Menu container */}
        <div className="flex-1 flex items-center justify-center relative">
          <motion.div
            ref={lineRef}
            className="h-0.5 bg-green-400 hidden lg:block absolute top-1/2 -translate-y-1/2 z-10"
            initial={{ width: 0, right: "2rem" }}
            animate={menuControls}
            variants={{
              hidden: {
                width: 0,
                right: "2rem",
                transition: { duration: 0.1 },
              },
              lineExtend: {
                width: "5%",
                right: "2rem",
                transition: { duration: 0.2, ease: "easeInOut" },
              },
              showItems: {
                width: "5%",
                right: "2rem",
                transition: { duration: 0 },
              },
            }}
          />

          <motion.ul
            className="flex mr-8 items-center justify-center gap-24 relative z-20"
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                initial={{ opacity: 0, x: 10 }}
                animate={isHovered ? "visible" : "hidden"}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 0,
                    transition: { duration: 0.2 },
                  },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3 + (menuItems.length - 1 - i) * 0.1,
                      duration: 0.3,
                    },
                  }),
                }}
              >
                <a
                  href={item.href}
                  className="text-white text-sm md:text-base font-bold tracking-wider hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Hamburger menu */}
        <div
          className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
          aria-label="Navigation menu"
        >
          <span
            className={cn(
              "block h-0.5 bg-white transition-all duration-500 ease-in-out origin-center",
              isHovered ? "w-6 rotate-45 translate-y-1.5" : "w-4 ml-2"
            )}
          ></span>

          <span
            className={cn(
              "block w-6 h-0.5 bg-white my-1.5 transition-all duration-500 ease-in-out",
              isHovered ? "opacity-0 w-0" : ""
            )}
          ></span>

          <span
            className={cn(
              "block h-0.5 bg-white transition-all duration-500 ease-in-out origin-center",
              isHovered ? "w-6 -rotate-45 -translate-y-1.5" : "w-5"
            )}
          ></span>
        </div>
      </div>
    </nav>
  );
}
