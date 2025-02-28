"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        if (rect.top <= 0) {
          setHasScrolled(true);
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (hasScrolled) {
      setAnimateLinks(true);
      const timer = setTimeout(() => setAnimateLinks(false), 1500); // duration of animation
      return () => clearTimeout(timer);
    }
  }, [isSticky, hasScrolled]);

  return (
    <div
      id="navbar"
      className={`ml-[50%] -translate-x-2/4 w-11/12 flex h-10 ${
        isSticky
          ? "w-full md:ml-0 md:translate-x-0 md:w-40 px-2 md:rounded-br md:flex-col md:h-1/6"
          : "rounded md:w-9/12 xl:w-7/12 2xl:w-6/12 flex-row"
      } justify-around mt-5 py-1 bg-slate-500 text-base 
        md:text-2xl text-slate-50 top-0 z-10 transition-all duration-1500 ease-in-out sticky`}
    >
      <Link
        className={`${
          animateLinks ? "md:animate-[transitfade_3s]" : ""
        } hover:text-black`}
        href="#projects"
        scroll
      >
        projects
      </Link>
      <Link
        className={`${
          animateLinks ? "md:animate-[transitfade_3s]" : ""
        } hover:text-black`}
        href="#about"
        scroll
      >
        about me
      </Link>
      <Link
        className={`${
          animateLinks ? "md:animate-[transitfade_3s]" : ""
        } hover:text-black`}
        href="#journey"
        scroll
      >
        my journey
      </Link>
    </div>
  );
}
