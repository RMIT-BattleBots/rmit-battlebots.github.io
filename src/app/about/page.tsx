import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black mb-12 uppercase">
          About
        </h1>

        <div className="mb-16 brutal-border-b pb-16">
          <div className="brutal-border bg-cyan-400 p-6 mb-8 brutal-shadow-sm">
            <h2 className="text-2xl font-black tracking-wide text-black uppercase mb-6">
              Our Mission
            </h2>
          </div>
          <div className="mb-8 brutal-border">
            <Image
              src="/group_image_1.webp"
              alt="ARC team working together"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-black leading-tight font-bold mb-8 max-w-2xl text-lg">
            Advanced RMIT Combat-Robotics (ARC) brings together students from
            all disciplines to design, build, and compete with combat robots.
            Our mission is to ignite the passion for combat robotics and provide
            hands-on experience in engineering, design, and innovation.
          </p>

          <div className="mb-8 brutal-border">
            <Image
              src="/group_image_2.webp"
              alt="ARC team collaboration"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-black leading-tight font-bold max-w-2xl text-lg">
            Whether you&apos;re a seasoned engineer or just curious about
            robotics, we welcome anyone with a passion for building and
            competing. Our collective provides the perfect environment to learn,
            create, and explore the boundaries of robotic innovation.
          </p>
        </div>

        <div className="brutal-border-b pb-16">
          <div className="brutal-border bg-yellow-300 p-6 mb-8 brutal-shadow-sm">
            <h2 className="text-2xl font-black tracking-wide text-black uppercase mb-6">
              What We Do
            </h2>
          </div>
          <ul className="text-black space-y-4 font-bold text-lg">
            <li className="flex items-start">
              <span className="mr-4 bg-red-400 px-2 py-1 brutal-border brutal-shadow-sm">
                —
              </span>
              <span>Design and build combat robots for competitions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 bg-red-400 px-2 py-1 brutal-border brutal-shadow-sm">
                —
              </span>
              <span>
                Work with{" "}
                <a
                  href="https://www.rmit.edu.au/about/our-values/diversity-and-inclusion/programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 px-2 py-1 brutal-border text-black font-black"
                >
                  IBelong
                </a>{" "}
                to deliver engineering workshops to highschools
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 bg-red-400 px-2 py-1 brutal-border brutal-shadow-sm">
                —
              </span>
              <span>
                Run workshops on robotics, electronics, and mechanical design
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 bg-red-400 px-2 py-1 brutal-border brutal-shadow-sm">
                —
              </span>
              <span>Network with industry professionals and mentors</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 bg-red-400 px-2 py-1 brutal-border brutal-shadow-sm">
                —
              </span>
              <span>Connect with other engineering students</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
