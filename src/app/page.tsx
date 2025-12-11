import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3f0] relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape shape-circle w-96 h-96 -top-48 -right-48 animate-float-slow"></div>
        <div className="decorative-shape shape-square w-64 h-64 top-1/4 -left-32 animate-float delay-300"></div>
        <div className="decorative-shape shape-circle w-80 h-80 bottom-1/4 right-1/4 animate-float-slow delay-500"></div>
        <div className="decorative-shape shape-triangle border-l-[60px] border-r-[60px] border-b-[100px] top-1/3 right-1/3 animate-pulse-slow delay-200"></div>
        <div className="decorative-shape shape-square w-48 h-48 bottom-1/3 -left-24 animate-float delay-400"></div>

        {/* Combat Robotics Elements */}
        {/* Sawblades */}
        <div
          className="combat-element top-20 right-20 animate-rotate-slow"
          style={{ width: "120px", height: "120px" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(196, 15, 15, 0.2)"
              strokeWidth="1"
            />
            <path
              d="M50,5 L52,45 L50,50 L48,45 Z M95,50 L55,52 L50,50 L55,48 Z M50,95 L48,55 L50,50 L52,55 Z M5,50 L45,48 L50,50 L45,52 Z"
              fill="rgba(196, 15, 15, 0.15)"
              stroke="rgba(196, 15, 15, 0.25)"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="8" fill="rgba(196, 15, 15, 0.3)" />
          </svg>
        </div>

        <div
          className="combat-element top-1/3 left-10 animate-rotate delay-300"
          style={{ width: "80px", height: "80px" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(196, 15, 15, 0.2)"
              strokeWidth="1"
            />
            <path
              d="M50,10 L51,40 L50,50 L49,40 Z M90,50 L60,51 L50,50 L60,49 Z M50,90 L49,60 L50,50 L51,60 Z M10,50 L40,49 L50,50 L40,51 Z"
              fill="rgba(196, 15, 15, 0.15)"
              stroke="rgba(196, 15, 15, 0.25)"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="6" fill="rgba(196, 15, 15, 0.3)" />
          </svg>
        </div>

        <div
          className="combat-element bottom-1/4 right-1/3 animate-rotate-slow delay-500"
          style={{ width: "100px", height: "100px" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(196, 15, 15, 0.2)"
              strokeWidth="1"
            />
            <path
              d="M50,8 L51.5,42 L50,50 L48.5,42 Z M92,50 L58,51.5 L50,50 L58,48.5 Z M50,92 L48.5,58 L50,50 L51.5,58 Z M8,50 L42,48.5 L50,50 L42,51.5 Z"
              fill="rgba(196, 15, 15, 0.15)"
              stroke="rgba(196, 15, 15, 0.25)"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="7" fill="rgba(196, 15, 15, 0.3)" />
          </svg>
        </div>

        {/* Gears */}
        <div
          className="combat-element top-1/2 left-1/4 animate-rotate delay-200"
          style={{ width: "90px", height: "90px" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="rgba(196, 15, 15, 0.1)"
              stroke="rgba(196, 15, 15, 0.2)"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="12" fill="rgba(196, 15, 15, 0.2)" />
            <rect
              x="48"
              y="15"
              width="4"
              height="20"
              fill="rgba(196, 15, 15, 0.2)"
            />
            <rect
              x="48"
              y="65"
              width="4"
              height="20"
              fill="rgba(196, 15, 15, 0.2)"
            />
            <rect
              x="15"
              y="48"
              width="20"
              height="4"
              fill="rgba(196, 15, 15, 0.2)"
            />
            <rect
              x="65"
              y="48"
              width="20"
              height="4"
              fill="rgba(196, 15, 15, 0.2)"
            />
            <rect
              x="30"
              y="30"
              width="4"
              height="15"
              fill="rgba(196, 15, 15, 0.2)"
              transform="rotate(45 50 50)"
            />
            <rect
              x="66"
              y="30"
              width="4"
              height="15"
              fill="rgba(196, 15, 15, 0.2)"
              transform="rotate(45 50 50)"
            />
            <rect
              x="30"
              y="55"
              width="4"
              height="15"
              fill="rgba(196, 15, 15, 0.2)"
              transform="rotate(45 50 50)"
            />
            <rect
              x="66"
              y="55"
              width="4"
              height="15"
              fill="rgba(196, 15, 15, 0.2)"
              transform="rotate(45 50 50)"
            />
          </svg>
        </div>

        <div
          className="combat-element bottom-20 left-20 animate-rotate-slow delay-400"
          style={{ width: "70px", height: "70px" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="rgba(196, 15, 15, 0.1)"
              stroke="rgba(196, 15, 15, 0.2)"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="10" fill="rgba(196, 15, 15, 0.2)" />
            <rect
              x="48.5"
              y="20"
              width="3"
              height="15"
              fill="rgba(196, 15, 15, 0.2)"
            />
            <rect
              x="48.5"
              y="65"
              width="3"
              height="15"
              fill="rgba(196, 15, 15, 0.2)"
            />
            <rect
              x="20"
              y="48.5"
              width="15"
              height="3"
              fill="rgba(196, 15, 15, 0.2)"
            />
            <rect
              x="65"
              y="48.5"
              width="15"
              height="3"
              fill="rgba(196, 15, 15, 0.2)"
            />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-[#C40F0F]/20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-32 md:py-40">
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-block animate-float-slow">
              <Image
                src="/robot_logo.svg"
                alt="ARC Logo"
                width={72}
                height={72}
                className="mb-8 opacity-80"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-900 mb-8 leading-[1.1] animate-fade-in-up delay-100">
            Advanced RMIT
            <br />
            <span className="text-[#C40F0F]">Combat-Robotics</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-stone-700 mb-12 leading-relaxed max-w-3xl animate-fade-in-up delay-200">
            A student-led engineering collective building combat robots and
            exploring the boundaries of robotics innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              href="/blog"
              className="inline-block border-2 border-[#C40F0F] text-[#C40F0F] px-10 py-4 text-base font-light tracking-wide hover:bg-[#C40F0F] hover:text-white transition-all duration-300 bg-white/80 hover:scale-105 shadow-md hover:shadow-lg"
            >
              View Work
            </Link>
            <Link
              href="#about"
              className="inline-block text-[#C40F0F] px-10 py-4 text-base font-light tracking-wide hover:text-[#a00d0d] transition-all duration-300 hover:translate-x-2"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-b border-[#C40F0F]/20 relative z-10 bg-white/40"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24">
            <div className="animate-fade-in-up delay-100 group">
              <div className="mb-6 h-1 w-16 bg-[#C40F0F] group-hover:w-24 transition-all duration-500"></div>
              <h2 className="text-sm font-light tracking-wider text-[#C40F0F] uppercase mb-5 text-stone-900">
                What We Do
              </h2>
              <p className="text-stone-700 leading-relaxed font-light text-base">
                Design, build, and compete with combat robots. We bring together
                students from various engineering disciplines to create
                innovative robotic systems.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200 group">
              <div className="mb-6 h-1 w-16 bg-[#C40F0F] group-hover:w-24 transition-all duration-500"></div>
              <h2 className="text-sm font-light tracking-wider text-[#C40F0F] uppercase mb-5 text-stone-900">
                Our Approach
              </h2>
              <p className="text-stone-700 leading-relaxed font-light text-base">
                Hands-on learning through real projects. We believe the best way
                to learn engineering is by building machines that can withstand
                combat.
              </p>
            </div>
            <div className="animate-fade-in-up delay-300 group">
              <div className="mb-6 h-1 w-16 bg-[#C40F0F] group-hover:w-24 transition-all duration-500"></div>
              <h2 className="text-sm font-light tracking-wider text-[#C40F0F] uppercase mb-5 text-stone-900">
                Community
              </h2>
              <p className="text-stone-700 leading-relaxed font-light text-base">
                A collaborative space for passionate engineers to share
                knowledge, work on projects, and push the boundaries of
                what&apos;s possible.
              </p>
            </div>
          </div>

          <div className="pt-20 border-t border-stone-300/50 animate-fade-in-up delay-400">
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-8 leading-tight">
              About ARC
            </h2>
            <div className="space-y-6 text-stone-700 leading-relaxed font-light max-w-3xl text-lg">
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
                className="inline-block text-[#C40F0F] text-base font-light tracking-wide hover:text-[#a00d0d] hover:underline transition-all duration-300 hover:translate-x-2"
              >
                Explore our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events/Activities Section with group_image_3 */}
      <section className="border-b border-[#C40F0F]/20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up delay-100">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                Events & Activities
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed font-light mb-8">
                From workshops and build sessions to competitions and panel
                discussions, ARC hosts a variety of events that bring our
                community together. Join us for hands-on learning, networking
                opportunities, and exciting robot combat action.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#C40F0F] text-xl mt-1">⚙️</span>
                  <div>
                    <h3 className="text-base font-light text-stone-900 mb-1">
                      Weekly Workshops
                    </h3>
                    <p className="text-stone-700 font-light text-sm">
                      Hands-on sessions covering robotics, electronics, and
                      mechanical design
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C40F0F] text-xl mt-1">🔧</span>
                  <div>
                    <h3 className="text-base font-light text-stone-900 mb-1">
                      Build Sessions
                    </h3>
                    <p className="text-stone-700 font-light text-sm">
                      Collaborative robot building and testing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C40F0F] text-xl mt-1">🏆</span>
                  <div>
                    <h3 className="text-base font-light text-stone-900 mb-1">
                      Competitions
                    </h3>
                    <p className="text-stone-700 font-light text-sm">
                      Test your robots in exciting combat events
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200 relative">
              <div className="relative overflow-hidden rounded-sm shadow-lg group">
                <Image
                  src="/group_image_3.jpg"
                  alt="ARC event panel discussion"
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative sawblade overlay */}
              <div className="absolute -top-8 -right-8 w-24 h-24 opacity-20 animate-rotate-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(196, 15, 15, 0.3)"
                    strokeWidth="1"
                  />
                  <path
                    d="M50,5 L52,45 L50,50 L48,45 Z M95,50 L55,52 L50,50 L55,48 Z M50,95 L48,55 L50,50 L52,55 Z M5,50 L45,48 L50,50 L45,52 Z"
                    fill="rgba(196, 15, 15, 0.2)"
                    stroke="rgba(196, 15, 15, 0.3)"
                    strokeWidth="1.5"
                  />
                  <circle cx="50" cy="50" r="8" fill="rgba(196, 15, 15, 0.3)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-b border-[#C40F0F]/20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight animate-fade-in-up">
            Connect
          </h2>
          <p className="text-lg md:text-xl text-stone-700 mb-12 font-light leading-relaxed max-w-2xl animate-fade-in-up delay-100">
            Follow our journey, see our builds, and stay updated with
            competition highlights and engineering insights.
          </p>
          <div className="flex flex-wrap gap-8 animate-fade-in-up delay-200">
            <a
              href="https://www.instagram.com/rmitarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C40F0F] hover:text-[#a00d0d] text-base font-light tracking-wide transition-all duration-300 hover:scale-110 inline-block border-b-2 border-[#C40F0F]/30 hover:border-[#C40F0F] pb-1"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/advanced-rmit-combat-roboticsrmit-battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C40F0F] hover:text-[#a00d0d] text-base font-light tracking-wide transition-all duration-300 hover:scale-110 inline-block border-b-2 border-[#C40F0F]/30 hover:border-[#C40F0F] pb-1"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RMIT-BattleBots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C40F0F] hover:text-[#a00d0d] text-base font-light tracking-wide transition-all duration-300 hover:scale-110 inline-block border-b-2 border-[#C40F0F]/30 hover:border-[#C40F0F] pb-1"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
