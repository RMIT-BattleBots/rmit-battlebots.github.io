import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer className="w-full flex flex-col items-center justify-center gap-2 py-6 bg-gray-100 text-gray-900 mt-8">
    <div className="flex gap-6">
      <a
        href="https://www.linkedin.com/company/rmit-battlebots"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
      </a>
      <a
        href="https://www.instagram.com/rmitbattlebots"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
      </a>
      <a
        href="https://github.com/RMIT-BattleBots"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Image src="/github-mark.svg" alt="GitHub" width={32} height={32} />
      </a>
    </div>
  </footer>
);

export default Footer;
