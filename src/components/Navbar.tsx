import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
            aria-label="Go to home page"
          >
            <Image
              src="/robot_logo.svg"
              alt="ARC Logo"
              width={32}
              height={32}
              className="group-hover:opacity-80 transition-opacity"
            />
            <span className="text-lg font-light tracking-wide text-gray-900 group-hover:text-indigo-600 transition-colors">
              ARC
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
            <li>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-indigo-600 transition-colors"
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
