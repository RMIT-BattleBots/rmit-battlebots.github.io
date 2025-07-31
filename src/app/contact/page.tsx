import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">RMIT City Campus</p>
                <p className="text-gray-600">Melbourne, Victoria, Australia</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Meeting Times
                </h3>
                <p className="text-gray-600">
                  Weekly workshops and build sessions
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <Image
                    src="/github-mark.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Join Our Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Membership
              </h3>
              <p className="text-gray-600 mb-4">
                Ready to join? Become a member and get access to our workshops,
                competitions, and resources.
              </p>
              <a
                href="https://store.rmit.edu.au/pages/club/battlebots"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
