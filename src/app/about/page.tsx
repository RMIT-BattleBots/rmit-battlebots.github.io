import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-12">
          About
        </h1>

        <div className="mb-16 border-b border-gray-100 pb-16">
          <h2 className="text-sm font-light tracking-wider text-indigo-600 uppercase mb-6">
            Our Mission
          </h2>
          <div className="mb-8">
            <Image
              src="/group_image_1.webp"
              alt="ARC team working together"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-700 leading-relaxed font-light mb-8 max-w-2xl">
            Advanced RMIT Combat-Robotics (ARC) brings together students from
            all disciplines to design, build, and compete with combat robots.
            Our mission is to ignite the passion for combat robotics and provide
            hands-on experience in engineering, design, and innovation.
          </p>

          <div className="mb-8">
            <Image
              src="/group_image_2.webp"
              alt="ARC team collaboration"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-700 leading-relaxed font-light max-w-2xl">
            Whether you&apos;re a seasoned engineer or just curious about
            robotics, we welcome anyone with a passion for building and
            competing. Our collective provides the perfect environment to learn,
            create, and explore the boundaries of robotic innovation.
          </p>
        </div>

        <div className="border-b border-gray-100 pb-16">
          <h2 className="text-sm font-light tracking-wider text-indigo-600 uppercase mb-6">
            What We Do
          </h2>
          <ul className="text-gray-700 space-y-4 font-light">
            <li className="flex items-start">
              <span className="mr-4 text-indigo-400">—</span>
              <span>Design and build combat robots for competitions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-indigo-400">—</span>
              <span>
                Work with{" "}
                <a
                  href="https://www.rmit.edu.au/about/our-values/diversity-and-inclusion/programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 border-b border-indigo-200 hover:border-indigo-600 transition-colors"
                >
                  IBelong
                </a>{" "}
                to deliver engineering workshops to highschools
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-indigo-400">—</span>
              <span>
                Run workshops on robotics, electronics, and mechanical design
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-indigo-400">—</span>
              <span>Network with industry professionals and mentors</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-indigo-400">—</span>
              <span>Connect with other engineering students</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
