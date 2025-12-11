import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-40">
          <div className="mb-12">
            <Image
              src="/robot_logo.svg"
              alt="ARC Logo"
              width={64}
              height={64}
              className="mb-8 opacity-80"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
            Advanced RMIT
            <br />
            Combat-Robotics
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 leading-relaxed max-w-2xl">
            A student-led engineering collective building combat robots and
            exploring the boundaries of robotics innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-light tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Work
            </Link>
            <Link
              href="#about"
              className="inline-block text-gray-600 px-8 py-3 text-sm font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div>
              <h2 className="text-sm font-light tracking-wider text-gray-500 uppercase mb-4">
                What We Do
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Design, build, and compete with combat robots. We bring together
                students from various engineering disciplines to create
                innovative robotic systems.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-light tracking-wider text-gray-500 uppercase mb-4">
                Our Approach
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Hands-on learning through real projects. We believe the best way
                to learn engineering is by building machines that can withstand
                combat.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-light tracking-wider text-gray-500 uppercase mb-4">
                Community
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                A collaborative space for passionate engineers to share
                knowledge, work on projects, and push the boundaries of
                what&apos;s possible.
              </p>
            </div>
          </div>

          <div className="pt-16 border-t border-gray-100">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              About ARC
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-light max-w-2xl">
              <p>
                Advanced RMIT Combat-Robotics (ARC) is a student-run engineering
                collective dedicated to building combat robots and inspiring
                hands-on innovation through technology, teamwork, and
                engineering excellence.
              </p>
              <p>
                We bring together passionate students from various engineering
                disciplines to design, build, and compete with combat robots.
                Our collective provides a unique opportunity to learn by doing,
                build amazing robots, compete in exciting events, and connect
                with like-minded engineers.
              </p>
            </div>
            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-block text-gray-900 text-sm font-light tracking-wide hover:underline"
              >
                Explore our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Connect</h2>
          <p className="text-gray-600 mb-12 font-light leading-relaxed max-w-xl">
            Follow our journey, see our builds, and stay updated with
            competition highlights and engineering insights.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.instagram.com/rmitarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/advanced-rmit-combat-roboticsrmit-battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RMIT-BattleBots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
