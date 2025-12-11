import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f3f0] relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape shape-circle w-96 h-96 -top-48 -left-48 animate-float-slow"></div>
        <div className="decorative-shape shape-square w-72 h-72 top-1/2 right-1/4 animate-float delay-300"></div>
        <div className="decorative-shape shape-triangle border-l-[40px] border-r-[40px] border-b-[70px] bottom-1/4 left-1/3 animate-pulse-slow delay-200"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-900 mb-16 leading-tight animate-fade-in-up">
          Contact
        </h1>

        <div className="mb-20 border-b border-[#C40F0F]/30 pb-20 animate-fade-in-up delay-100">
          <h2 className="text-sm font-light tracking-wider text-[#C40F0F] uppercase mb-10 text-stone-900">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="group">
              <h3 className="text-sm font-light tracking-wide text-[#C40F0F] uppercase mb-4 text-stone-900">
                Location
              </h3>
              <p className="text-lg text-stone-700 font-light group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                RMIT City Campus
              </p>
              <p className="text-lg text-stone-700 font-light group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                Melbourne, Victoria, Australia
              </p>
            </div>

            <div className="group">
              <h3 className="text-sm font-light tracking-wide text-[#C40F0F] uppercase mb-4 text-stone-900">
                Meeting Times
              </h3>
              <p className="text-lg text-stone-700 font-light group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                Weekly workshops and build sessions
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h3 className="text-sm font-light tracking-wide text-[#C40F0F] uppercase mb-8 text-stone-900">
              Follow Us
            </h3>
            <div className="flex gap-8">
              <a
                href="https://www.instagram.com/rmitarc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
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
                  width={24}
                  height={24}
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
                  width={24}
                  height={24}
                  className="opacity-70"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-[#C40F0F]/30 pb-20 animate-fade-in-up delay-300">
          <h2 className="text-sm font-light tracking-wider text-[#C40F0F] uppercase mb-10 text-stone-900">
            Join Our Community
          </h2>

          <div>
            <h3 className="text-2xl font-light text-stone-900 mb-6 leading-tight">
              Membership
            </h3>
            <p className="text-lg text-stone-700 font-light mb-8 max-w-2xl leading-relaxed">
              Ready to join? Become a member and get access to our workshops,
              competitions, and resources.
            </p>
            <a
              href="https://store.rmit.edu.au/pages/club/battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#C40F0F] text-[#C40F0F] px-8 py-4 text-base font-light tracking-wide hover:bg-[#C40F0F] hover:text-white transition-all duration-300 bg-white/80 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
