import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer className="w-full bg-yellow-300 brutal-border-t mt-auto">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="brutal-border bg-white p-4 brutal-shadow-sm">
          <p className="text-sm font-black text-black mb-2 uppercase">
            Advanced RMIT Combat-Robotics
          </p>
          <p className="text-xs font-black text-black">
            © {new Date().getFullYear()}{" "}
            <span className="bg-black text-white px-2 py-1">ARC</span>. All
            rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/advanced-rmit-combat-robotics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="brutal-border bg-black p-2 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </a>
          <a
            href="https://www.instagram.com/rmitarc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="brutal-border bg-black p-2 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </a>
          <a
            href="https://github.com/RMIT-BattleBots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="brutal-border bg-black p-2 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
