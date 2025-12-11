import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] tech-grid relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-12 neon-glow">
          Contact
        </h1>

        <div className="mb-16 border-b border-cyan-500/20 pb-16">
          <div className="tech-card p-6 mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <h2 className="text-2xl font-bold tracking-wide text-pink-400 uppercase mb-8">
              Get in Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="tech-card p-6">
              <h3 className="text-lg font-bold tracking-wide text-cyan-400 uppercase mb-4">
                Location
              </h3>
              <p className="text-gray-300 font-medium">RMIT City Campus</p>
              <p className="text-gray-300 font-medium">
                Melbourne, Victoria, Australia
              </p>
            </div>

            <div className="tech-card p-6">
              <h3 className="text-lg font-bold tracking-wide text-blue-400 uppercase mb-4">
                Meeting Times
              </h3>
              <p className="text-gray-300 font-medium">
                Weekly workshops and build sessions
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold tracking-wide text-purple-400 uppercase mb-6">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rmitarc/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card p-3 hover:neon-border transition-all"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="brightness-0 invert opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/advanced-rmit-combat-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card p-3 hover:neon-border transition-all"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="brightness-0 invert opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="https://github.com/RMIT-BattleBots"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card p-3 hover:neon-border transition-all"
              >
                <Image
                  src="/github-mark.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="brightness-0 invert opacity-70 hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-cyan-500/20 pb-16">
          <div className="tech-card p-6 mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
            <h2 className="text-2xl font-bold tracking-wide text-green-400 uppercase mb-8">
              Join Our Community
            </h2>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
              Membership
            </h3>
            <p className="text-gray-300 font-medium mb-6 max-w-xl text-lg">
              Ready to join? Become a member and get access to our workshops,
              competitions, and resources.
            </p>
            <a
              href="https://store.rmit.edu.au/pages/club/battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border bg-[#1e293b] text-cyan-400 px-8 py-4 text-base font-semibold tracking-wide uppercase hover:bg-cyan-500/10 hover:neon-glow transition-all inline-block"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
