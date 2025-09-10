"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavItems from "./NavItems";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => setisOpen(!isOpen);
  const closeMenu = () => setisOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/9">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Abdullah
          </Link>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <Image
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              width={24}
              height={24}
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
}
