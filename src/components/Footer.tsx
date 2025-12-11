import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer className="w-full bg-black border-t border-cyan-500/20 mt-auto">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-sm font-light text-gray-500 mb-2">
            Advanced RMIT Combat-Robotics
          </p>
          <p className="text-xs font-light text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400">ARC</span>. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/company/advanced-rmit-combat-robotics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="opacity-60 hover:opacity-100 brightness-0 invert"
            />
          </a>
          <a
            href="https://www.instagram.com/rmitarc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="opacity-60 hover:opacity-100 brightness-0 invert"
            />
          </a>
          <a
            href="https://github.com/RMIT-BattleBots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="opacity-60 hover:opacity-100 brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
