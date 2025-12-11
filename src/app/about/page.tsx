import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About RMIT BattleBots
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <div className="mb-6">
            <Image
              src="/group_image_1.webp"
              alt="RMIT BattleBots team working together"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-gray-600 mb-6">
            We are the RMIT BattleBots Club, bringing together students from all
            disciplines to design, build, and compete with our very own combat
            bots! Our mission is to ignite the passion for combat robotics and
            provide hands-on experience in engineering, design, and innovation.
          </p>

          <div className="mb-6">
            <Image
              src="/group_image_2.webp"
              alt="BattleBots team collaboration"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-gray-600 mb-6">
            Whether you&apos;re a seasoned engineer or just curious about
            robotics, we welcome anyone with a passion for building and
            competing. Our club provides the perfect environment to learn,
            create, and unleash your inner innovator!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Do
          </h2>
          <ul className="text-gray-600 space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Design and build combat robots for competitions
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Work with{" "}
                <a
                  href="https://www.rmit.edu.au/about/our-values/diversity-and-inclusion/programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  IBelong
                </a>
                {"  "}
                to deliver engineering workshops to highschools
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Run workshops on robotics, electronics, and mechanical design
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Network with industry professionals and mentors
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Socialise with other engineering students
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
