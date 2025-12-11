import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-300 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape shape-circle w-80 h-80 top-1/4 right-1/4 animate-float-slow"></div>
        <div className="decorative-shape shape-square w-64 h-64 bottom-1/3 -left-32 animate-float delay-300"></div>
        <div className="decorative-shape shape-triangle border-l-[50px] border-r-[50px] border-b-[80px] top-1/2 left-1/4 animate-pulse-slow delay-200"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-900 mb-16 leading-tight animate-fade-in-up">
          About
        </h1>

        <div className="mb-20 border-b border-stone-400/40 pb-20 animate-fade-in-up delay-100">
          <h2 className="text-sm font-light tracking-wider text-stone-700 uppercase mb-8 text-stone-900">
            Our Mission
          </h2>
          <div className="mb-10 overflow-hidden group rounded-sm shadow-sm">
            <Image
              src="/group_image_1.webp"
              alt="ARC team working together"
              width={800}
              height={400}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <p className="text-lg text-stone-800 leading-relaxed font-light mb-10 max-w-3xl">
            Advanced RMIT Combat-Robotics (ARC) brings together students from
            all disciplines to design, build, and compete with combat robots.
            Our mission is to ignite the passion for combat robotics and provide
            hands-on experience in engineering, design, and innovation.
          </p>

          <div className="mb-10 overflow-hidden group rounded-sm shadow-sm">
            <Image
              src="/group_image_2.webp"
              alt="ARC team collaboration"
              width={800}
              height={400}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <p className="text-lg text-stone-800 leading-relaxed font-light max-w-3xl">
            Whether you&apos;re a seasoned engineer or just curious about
            robotics, we welcome anyone with a passion for building and
            competing. Our collective provides the perfect environment to learn,
            create, and explore the boundaries of robotic innovation.
          </p>
        </div>

        <div className="border-b border-stone-400/40 pb-20 animate-fade-in-up delay-200">
          <h2 className="text-sm font-light tracking-wider text-stone-700 uppercase mb-10 text-stone-900">
            What We Do
          </h2>
          <ul className="text-stone-800 space-y-5 font-light text-lg">
            <li className="flex items-start group">
              <span className="mr-5 text-stone-600 group-hover:text-stone-900 transition-colors duration-300 text-xl leading-none pt-1">
                —
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                Design and build combat robots for competitions
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-5 text-stone-600 group-hover:text-stone-900 transition-colors duration-300 text-xl leading-none pt-1">
                —
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                Work with{" "}
                <a
                  href="https://www.rmit.edu.au/about/our-values/diversity-and-inclusion/programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 border-b-2 border-stone-500 hover:border-stone-900 transition-colors duration-300"
                >
                  IBelong
                </a>{" "}
                to deliver engineering workshops to highschools
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-5 text-stone-600 group-hover:text-stone-900 transition-colors duration-300 text-xl leading-none pt-1">
                —
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                Run workshops on robotics, electronics, and mechanical design
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-5 text-stone-600 group-hover:text-stone-900 transition-colors duration-300 text-xl leading-none pt-1">
                —
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                Network with industry professionals and mentors
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-5 text-stone-600 group-hover:text-stone-900 transition-colors duration-300 text-xl leading-none pt-1">
                —
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 leading-relaxed">
                Connect with other engineering students
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
