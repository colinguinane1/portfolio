"use client";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./theme-buton";

export default function NHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  const NavigationData = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (navRef.current && isOpen) {
      setNavHeight(navRef.current.scrollHeight);
    }
  }, [isOpen, navRef]);

  return (
    <nav className="">
      <motion.header
        initial={{ y: -100 }}
        animate={{
          height: isOpen ? `${navHeight + 54}px` : "54px",
          y: 0, // 64px is the closed header height
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex w-full items-center flex-col px-4 py-1  overflow-hidden z-20" // Prevent content overflow
      >
        <div className="flex items-center mt-0 md:mt-[8px] w-full justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="font-bold p-1 rounded-md">
              c-g.dev
            </a>
          </div>{" "}
          <div className=" hidden md:flex  items-center gap-6">
            {NavigationData.map((nav) => (
              <Link className="font-bold" key={nav.name} href={nav.href}>
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center justify-center">
            <ModeToggle />
            <Hamburger toggle={setIsOpen} toggled={isOpen} rounded size={20} />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              ref={navRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-4 pb-4 items-center justify-center"
            >
              {NavigationData.map((nav) => (
                <Link
                  className="text-3xl hover:text-primary font-extrabold tracking-tight"
                  key={nav.name}
                  href={nav.href}
                >
                  {nav.name}
                </Link>
              ))}{" "}
            </motion.nav>
          )}{" "}
        </AnimatePresence>
      </motion.header>
    </nav>
  );
}
