import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-300 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape shape-circle w-96 h-96 -top-48 -right-48 animate-float-slow"></div>
        <div className="decorative-shape shape-square w-64 h-64 top-1/4 -left-32 animate-float delay-300"></div>
        <div className="decorative-shape shape-circle w-80 h-80 bottom-1/4 right-1/4 animate-float-slow delay-500"></div>
        <div className="decorative-shape shape-triangle border-l-[60px] border-r-[60px] border-b-[100px] top-1/3 right-1/3 animate-pulse-slow delay-200"></div>
        <div className="decorative-shape shape-square w-48 h-48 bottom-1/3 -left-24 animate-float delay-400"></div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-stone-400/30 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-40">
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-block animate-float-slow">
              <Image
                src="/robot_logo.svg"
                alt="ARC Logo"
                width={64}
                height={64}
                className="mb-8 opacity-70"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-stone-900 mb-6 leading-tight animate-fade-in-up delay-100">
            Advanced RMIT
            <br />
            Combat-Robotics
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-800 mb-12 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            A student-led engineering collective building combat robots and
            exploring the boundaries of robotics innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              href="/blog"
              className="inline-block border border-stone-900 text-stone-900 px-8 py-3 text-sm font-light tracking-wide hover:bg-stone-900 hover:text-stone-50 transition-all duration-300 bg-stone-50/50 hover:scale-105"
            >
              View Work
            </Link>
            <Link
              href="#about"
              className="inline-block text-stone-800 px-8 py-3 text-sm font-light tracking-wide hover:text-stone-900 transition-all duration-300 hover:translate-x-2"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-b border-stone-400/30 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div className="animate-fade-in-up delay-100 group">
              <div className="mb-4 h-0.5 w-12 bg-stone-400 group-hover:w-24 transition-all duration-500"></div>
              <h2 className="text-sm font-light tracking-wider text-stone-700 uppercase mb-4">
                What We Do
              </h2>
              <p className="text-stone-800 leading-relaxed font-light">
                Design, build, and compete with combat robots. We bring together
                students from various engineering disciplines to create
                innovative robotic systems.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200 group">
              <div className="mb-4 h-0.5 w-12 bg-stone-400 group-hover:w-24 transition-all duration-500"></div>
              <h2 className="text-sm font-light tracking-wider text-stone-700 uppercase mb-4">
                Our Approach
              </h2>
              <p className="text-stone-800 leading-relaxed font-light">
                Hands-on learning through real projects. We believe the best way
                to learn engineering is by building machines that can withstand
                combat.
              </p>
            </div>
            <div className="animate-fade-in-up delay-300 group">
              <div className="mb-4 h-0.5 w-12 bg-stone-400 group-hover:w-24 transition-all duration-500"></div>
              <h2 className="text-sm font-light tracking-wider text-stone-700 uppercase mb-4">
                Community
              </h2>
              <p className="text-stone-800 leading-relaxed font-light">
                A collaborative space for passionate engineers to share
                knowledge, work on projects, and push the boundaries of
                what&apos;s possible.
              </p>
            </div>
          </div>

          <div className="pt-16 border-t border-stone-400/30 animate-fade-in-up delay-400">
            <h2 className="text-3xl font-light text-stone-900 mb-6">
              About ARC
            </h2>
            <div className="space-y-6 text-stone-800 leading-relaxed font-light max-w-2xl">
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
                className="inline-block text-stone-900 text-sm font-light tracking-wide hover:underline transition-all duration-300 hover:translate-x-2"
              >
                Explore our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-b border-stone-400/30 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <h2 className="text-3xl font-light text-stone-900 mb-8 animate-fade-in-up">
            Connect
          </h2>
          <p className="text-stone-800 mb-12 font-light leading-relaxed max-w-xl animate-fade-in-up delay-100">
            Follow our journey, see our builds, and stay updated with
            competition highlights and engineering insights.
          </p>
          <div className="flex flex-wrap gap-6 animate-fade-in-up delay-200">
            <a
              href="https://www.instagram.com/rmitarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-stone-900 text-sm font-light tracking-wide transition-all duration-300 hover:scale-110 inline-block"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/advanced-rmit-combat-roboticsrmit-battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-stone-900 text-sm font-light tracking-wide transition-all duration-300 hover:scale-110 inline-block"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RMIT-BattleBots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-stone-900 text-sm font-light tracking-wide transition-all duration-300 hover:scale-110 inline-block"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
