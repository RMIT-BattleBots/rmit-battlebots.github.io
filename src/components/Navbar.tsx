import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0a0a0f]/95 backdrop-blur-md sticky top-0 z-50 border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Go to home page"
          >
            <div className="neon-border bg-[#1e293b] p-2 group-hover:bg-cyan-500/10 transition-all relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Image
                src="/robot_logo.svg"
                alt="ARC Logo"
                width={32}
                height={32}
                className="relative z-10 brightness-0 invert"
              />
            </div>
            <span className="text-2xl font-bold tracking-wide text-white group-hover:text-cyan-400 transition-colors">
              ARC
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide uppercase">
            <li>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-400 hover:text-blue-400 transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-purple-400 transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="neon-border bg-[#1e293b] text-cyan-400 p-2"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
