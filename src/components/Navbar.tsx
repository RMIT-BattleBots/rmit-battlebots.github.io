import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#C40F0F]/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-70 transition-all duration-300 group"
            aria-label="Go to home page"
          >
            <div className="group-hover:rotate-12 transition-transform duration-300">
              <Image
                src="/robot_logo.svg"
                alt="ARC Logo"
                width={32}
                height={32}
                className="opacity-80"
              />
            </div>
            <span className="text-lg font-light tracking-wide text-stone-900 group-hover:translate-x-1 transition-transform duration-300">
              ARC
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
            <li>
              <Link
                href="/blog"
                className="text-stone-700 hover:text-[#C40F0F] transition-all duration-300 relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C40F0F] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-stone-700 hover:text-[#C40F0F] transition-all duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C40F0F] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-stone-700 hover:text-[#C40F0F] transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C40F0F] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-stone-700 hover:text-[#C40F0F] transition-all duration-300 hover:scale-110"
              aria-label="Menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
