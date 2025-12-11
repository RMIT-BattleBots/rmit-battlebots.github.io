import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-300 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape shape-circle w-96 h-96 -top-48 -left-48 animate-float-slow"></div>
        <div className="decorative-shape shape-square w-72 h-72 top-1/2 right-1/4 animate-float delay-300"></div>
        <div className="decorative-shape shape-triangle border-l-[40px] border-r-[40px] border-b-[70px] bottom-1/4 left-1/3 animate-pulse-slow delay-200"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight text-stone-900 mb-12 animate-fade-in-up">
          Contact
        </h1>

        <div className="mb-16 border-b border-stone-400/30 pb-16 animate-fade-in-up delay-100">
          <h2 className="text-sm font-light tracking-wider text-stone-700 uppercase mb-8">
            Get in Touch
          </h2>

          <div className="space-y-8 mb-12">
            <div className="group">
              <h3 className="text-sm font-light tracking-wide text-stone-700 uppercase mb-2">
                Location
              </h3>
              <p className="text-stone-800 font-light group-hover:translate-x-2 transition-transform duration-300">
                RMIT City Campus
              </p>
              <p className="text-stone-800 font-light group-hover:translate-x-2 transition-transform duration-300">
                Melbourne, Victoria, Australia
              </p>
            </div>

            <div className="group">
              <h3 className="text-sm font-light tracking-wide text-stone-700 uppercase mb-2">
                Meeting Times
              </h3>
              <p className="text-stone-800 font-light group-hover:translate-x-2 transition-transform duration-300">
                Weekly workshops and build sessions
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h3 className="text-sm font-light tracking-wide text-stone-700 uppercase mb-6">
              Follow Us
            </h3>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/rmitarc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-all duration-300 hover:scale-110 hover:rotate-12"
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
                href="https://www.linkedin.com/company/advanced-rmit-combat-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-all duration-300 hover:scale-110 hover:rotate-12"
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
                href="https://github.com/RMIT-BattleBots"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-all duration-300 hover:scale-110 hover:rotate-12"
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

        <div className="border-b border-stone-400/30 pb-16 animate-fade-in-up delay-300">
          <h2 className="text-sm font-light tracking-wider text-stone-700 uppercase mb-8">
            Join Our Community
          </h2>

          <div>
            <h3 className="text-lg font-light text-stone-900 mb-4">
              Membership
            </h3>
            <p className="text-stone-800 font-light mb-6 max-w-xl">
              Ready to join? Become a member and get access to our workshops,
              competitions, and resources.
            </p>
            <a
              href="https://store.rmit.edu.au/pages/club/battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-stone-900 text-stone-900 px-6 py-3 text-sm font-light tracking-wide hover:bg-stone-900 hover:text-stone-50 transition-all duration-300 bg-stone-50/50 hover:scale-105"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
