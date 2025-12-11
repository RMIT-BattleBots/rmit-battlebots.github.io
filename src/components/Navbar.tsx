import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white brutal-border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Go to home page"
          >
            <div className="brutal-border bg-purple-aesthetic p-2 brutal-shadow-sm group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
              <Image
                src="/robot_logo.svg"
                alt="ARC Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-2xl font-black tracking-wide text-black uppercase">
              ARC
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-base font-black tracking-wide uppercase">
            <li>
              <Link
                href="/blog"
                className="brutal-border bg-black text-white px-4 py-2 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="brutal-border bg-teal-aesthetic text-black px-4 py-2 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="brutal-border bg-coral-aesthetic text-black px-4 py-2 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="brutal-border bg-black text-white p-2 brutal-shadow-sm"
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
                  strokeWidth={3}
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
