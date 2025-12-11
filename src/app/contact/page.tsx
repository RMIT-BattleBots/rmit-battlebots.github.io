import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-12">
          Contact
        </h1>

        <div className="mb-16 border-b border-gray-100 pb-16">
          <h2 className="text-sm font-light tracking-wider text-gray-500 uppercase mb-8">
            Get in Touch
          </h2>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-light tracking-wide text-gray-500 uppercase mb-2">Location</h3>
              <p className="text-gray-700 font-light">RMIT City Campus</p>
              <p className="text-gray-700 font-light">Melbourne, Victoria, Australia</p>
            </div>

            <div>
              <h3 className="text-sm font-light tracking-wide text-gray-500 uppercase mb-2">
                Meeting Times
              </h3>
              <p className="text-gray-700 font-light">
                Weekly workshops and build sessions
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-light tracking-wide text-gray-500 uppercase mb-6">Follow Us</h3>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/rmitbattlebots"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="opacity-60"
                />
              </a>
              <a 
                href="https://www.linkedin.com/company/rmit-battlebots"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="opacity-60"
                />
              </a>
              <a 
                href="https://github.com/RMIT-BattleBots"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                <Image
                  src="/github-mark.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="opacity-60"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-100 pb-16">
          <h2 className="text-sm font-light tracking-wider text-gray-500 uppercase mb-8">
            Join Our Community
          </h2>

          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">
              Membership
            </h3>
            <p className="text-gray-700 font-light mb-6 max-w-xl">
              Ready to join? Become a member and get access to our workshops,
              competitions, and resources.
            </p>
            <a
              href="https://store.rmit.edu.au/pages/club/battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-900 text-gray-900 px-6 py-3 text-sm font-light tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
