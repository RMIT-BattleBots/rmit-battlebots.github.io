import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black mb-12 uppercase">
          Contact
        </h1>

        <div className="mb-16 brutal-border-b pb-16">
          <div className="brutal-border bg-yellow-300 p-6 mb-8 brutal-shadow-sm">
            <h2 className="text-2xl font-black tracking-wide text-black uppercase mb-8">
              Get in Touch
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            <div className="brutal-border bg-cyan-400 p-6 brutal-shadow-sm">
              <h3 className="text-lg font-black tracking-wide text-black uppercase mb-2">
                Location
              </h3>
              <p className="text-black font-bold">RMIT City Campus</p>
              <p className="text-black font-bold">
                Melbourne, Victoria, Australia
              </p>
            </div>

            <div className="brutal-border bg-red-400 p-6 brutal-shadow-sm">
              <h3 className="text-lg font-black tracking-wide text-black uppercase mb-2">
                Meeting Times
              </h3>
              <p className="text-black font-bold">
                Weekly workshops and build sessions
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black tracking-wide text-black uppercase mb-6">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rmitarc/"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border bg-black p-3 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/advanced-rmit-combat-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border bg-black p-3 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </a>
              <a
                href="https://github.com/RMIT-BattleBots"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border bg-black p-3 brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Image
                  src="/github-mark.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="brutal-border-b pb-16">
          <div className="brutal-border bg-cyan-400 p-6 mb-8 brutal-shadow-sm">
            <h2 className="text-2xl font-black tracking-wide text-black uppercase mb-8">
              Join Our Community
            </h2>
          </div>

          <div>
            <h3 className="text-2xl font-black text-black mb-4 uppercase">
              Membership
            </h3>
            <p className="text-black font-bold mb-6 max-w-xl text-lg">
              Ready to join? Become a member and get access to our workshops,
              competitions, and resources.
            </p>
            <a
              href="https://store.rmit.edu.au/pages/club/battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-black text-white px-8 py-4 text-base font-black tracking-wide uppercase brutal-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all inline-block"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
