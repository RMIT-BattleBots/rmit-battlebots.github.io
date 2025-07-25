import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-md bg-white text-gray-900">
      <div className="flex items-center gap-3">
        <Image src="./robot_logo.svg" alt="Robot Logo" width={40} height={40} />
        <span className="font-bold text-xl">RMIT Battlebots</span>
      </div>
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
      </ul>
    </nav>
  );
}
