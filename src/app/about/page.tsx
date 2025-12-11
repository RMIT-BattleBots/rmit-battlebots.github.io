import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] tech-grid relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-12 neon-glow">
          About
        </h1>

        <div className="mb-16 border-b border-cyan-500/20 pb-16">
          <div className="tech-card p-6 mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <h2 className="text-2xl font-bold tracking-wide text-cyan-400 uppercase mb-6 neon-glow">
              Our Mission
            </h2>
          </div>
          <div className="mb-8 neon-border overflow-hidden">
            <Image
              src="/group_image_1.webp"
              alt="ARC team working together"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-300 leading-relaxed font-medium mb-8 max-w-3xl text-lg">
            Advanced RMIT Combat-Robotics (ARC) brings together students from
            all disciplines to design, build, and compete with combat robots.
            Our mission is to ignite the passion for combat robotics and provide
            hands-on experience in engineering, design, and innovation.
          </p>

          <div className="mb-8 neon-border overflow-hidden">
            <Image
              src="/group_image_2.webp"
              alt="ARC team collaboration"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-300 leading-relaxed font-medium max-w-3xl text-lg">
            Whether you&apos;re a seasoned engineer or just curious about
            robotics, we welcome anyone with a passion for building and
            competing. Our collective provides the perfect environment to learn,
            create, and explore the boundaries of robotic innovation.
          </p>
        </div>

        <div className="border-b border-cyan-500/20 pb-16">
          <div className="tech-card p-6 mb-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <h2 className="text-2xl font-bold tracking-wide text-purple-400 uppercase mb-6">
              What We Do
            </h2>
          </div>
          <ul className="text-gray-300 space-y-4 font-medium text-lg">
            <li className="flex items-start">
              <span className="mr-4 text-cyan-400 text-2xl">▸</span>
              <span>Design and build combat robots for competitions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-cyan-400 text-2xl">▸</span>
              <span>
                Work with{" "}
                <a
                  href="https://www.rmit.edu.au/about/our-values/diversity-and-inclusion/programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:neon-glow underline font-semibold"
                >
                  IBelong
                </a>{" "}
                to deliver engineering workshops to highschools
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-cyan-400 text-2xl">▸</span>
              <span>
                Run workshops on robotics, electronics, and mechanical design
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-cyan-400 text-2xl">▸</span>
              <span>Network with industry professionals and mentors</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-cyan-400 text-2xl">▸</span>
              <span>Connect with other engineering students</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
