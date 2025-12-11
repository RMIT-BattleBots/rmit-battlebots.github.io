import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer className="w-full bg-white/60 border-t border-[#C40F0F]/20 mt-auto">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-sm font-light text-stone-700 mb-2">
            Advanced RMIT Combat-Robotics
          </p>
          <p className="text-xs font-light text-stone-600">
            © {new Date().getFullYear()} ARC. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/company/advanced-rmit-combat-robotics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-70 transition-all duration-300 hover:scale-110"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="opacity-70"
            />
          </a>
          <a
            href="https://www.instagram.com/rmitarc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition-all duration-300 hover:scale-110"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="opacity-70"
            />
          </a>
          <a
            href="https://github.com/RMIT-BattleBots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-70 transition-all duration-300 hover:scale-110"
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="opacity-70"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
