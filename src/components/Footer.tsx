import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer className="w-full bg-[#0a0a0f] border-t border-cyan-500/20 mt-auto">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="tech-card p-4">
          <p className="text-sm font-semibold text-gray-400 mb-2 uppercase">
            Advanced RMIT Combat-Robotics
          </p>
          <p className="text-xs font-medium text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-semibold">ARC</span>. All rights
            reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/advanced-rmit-combat-robotics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="tech-card p-2 hover:neon-border transition-all"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="brightness-0 invert opacity-60 hover:opacity-100"
            />
          </a>
          <a
            href="https://www.instagram.com/rmitarc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="tech-card p-2 hover:neon-border transition-all"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="brightness-0 invert opacity-60 hover:opacity-100"
            />
          </a>
          <a
            href="https://github.com/RMIT-BattleBots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="tech-card p-2 hover:neon-border transition-all"
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="brightness-0 invert opacity-60 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
