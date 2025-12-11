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

        {/* Rising Shapes - Slowly moving upward */}
        <div className="decorative-shape shape-circle w-32 h-32 left-[10%] bottom-0 animate-rise delay-100"></div>
        <div className="decorative-shape shape-square w-24 h-24 left-[20%] bottom-0 animate-rise-slow delay-500"></div>
        <div className="decorative-shape shape-circle w-40 h-40 left-[30%] bottom-0 animate-rise delay-800"></div>
        <div className="decorative-shape shape-triangle border-l-[30px] border-r-[30px] border-b-[50px] left-[40%] bottom-0 animate-rise-slow delay-1200"></div>
        <div className="decorative-shape shape-circle w-28 h-28 left-[50%] bottom-0 animate-rise delay-300"></div>
        <div className="decorative-shape shape-square w-36 h-36 left-[60%] bottom-0 animate-rise-slow delay-600"></div>
        <div className="decorative-shape shape-circle w-32 h-32 left-[70%] bottom-0 animate-rise delay-1000"></div>
        <div className="decorative-shape shape-triangle border-l-[25px] border-r-[25px] border-b-[40px] left-[80%] bottom-0 animate-rise-slow delay-400"></div>
        <div className="decorative-shape shape-square w-28 h-28 left-[90%] bottom-0 animate-rise delay-700"></div>

        {/* More rising shapes with different delays */}
        <div className="decorative-shape shape-circle w-36 h-36 left-[15%] bottom-0 animate-rise-slow delay-1500"></div>
        <div className="decorative-shape shape-square w-30 h-30 left-[25%] bottom-0 animate-rise delay-2000"></div>
        <div className="decorative-shape shape-circle w-26 h-26 left-[35%] bottom-0 animate-rise-slow delay-2500"></div>
        <div className="decorative-shape shape-triangle border-l-[20px] border-r-[20px] border-b-[35px] left-[45%] bottom-0 animate-rise delay-3000"></div>
        <div className="decorative-shape shape-circle w-34 h-34 left-[55%] bottom-0 animate-rise-slow delay-500"></div>
        <div className="decorative-shape shape-square w-32 h-32 left-[65%] bottom-0 animate-rise delay-1200"></div>
        <div className="decorative-shape shape-circle w-28 h-28 left-[75%] bottom-0 animate-rise-slow delay-1800"></div>
        <div className="decorative-shape shape-triangle border-l-[28px] border-r-[28px] border-b-[45px] left-[85%] bottom-0 animate-rise delay-2200"></div>
        <div className="decorative-shape shape-square w-24 h-24 left-[95%] bottom-0 animate-rise-slow delay-800"></div>

        {/* Additional rising shapes for more visual interest */}
        <div className="decorative-shape shape-circle w-30 h-30 left-[5%] bottom-0 animate-rise delay-1400"></div>
        <div className="decorative-shape shape-square w-22 h-22 left-[12%] bottom-0 animate-rise-slow delay-1900"></div>
        <div className="decorative-shape shape-circle w-38 h-38 left-[18%] bottom-0 animate-rise delay-600"></div>
        <div className="decorative-shape shape-triangle border-l-[22px] border-r-[22px] border-b-[38px] left-[22%] bottom-0 animate-rise-slow delay-1100"></div>
        <div className="decorative-shape shape-circle w-26 h-26 left-[28%] bottom-0 animate-rise delay-1600"></div>
        <div className="decorative-shape shape-square w-34 h-34 left-[38%] bottom-0 animate-rise-slow delay-900"></div>
        <div className="decorative-shape shape-circle w-32 h-32 left-[42%] bottom-0 animate-rise delay-1300"></div>
        <div className="decorative-shape shape-triangle border-l-[24px] border-r-[24px] border-b-[42px] left-[48%] bottom-0 animate-rise-slow delay-1700"></div>
        <div className="decorative-shape shape-square w-28 h-28 left-[52%] bottom-0 animate-rise delay-400"></div>
        <div className="decorative-shape shape-circle w-36 h-36 left-[58%] bottom-0 animate-rise-slow delay-1000"></div>
        <div className="decorative-shape shape-square w-24 h-24 left-[62%] bottom-0 animate-rise delay-1500"></div>
        <div className="decorative-shape shape-triangle border-l-[18px] border-r-[18px] border-b-[32px] left-[68%] bottom-0 animate-rise-slow delay-2000"></div>
        <div className="decorative-shape shape-circle w-30 h-30 left-[72%] bottom-0 animate-rise delay-700"></div>
        <div className="decorative-shape shape-square w-26 h-26 left-[78%] bottom-0 animate-rise-slow delay-1400"></div>
        <div className="decorative-shape shape-circle w-34 h-34 left-[82%] bottom-0 animate-rise delay-1100"></div>
        <div className="decorative-shape shape-triangle border-l-[26px] border-r-[26px] border-b-[44px] left-[88%] bottom-0 animate-rise-slow delay-600"></div>
        <div className="decorative-shape shape-square w-32 h-32 left-[92%] bottom-0 animate-rise delay-1800"></div>
        <div className="decorative-shape shape-circle w-28 h-28 left-[98%] bottom-0 animate-rise-slow delay-1200"></div>

        {/* Combat Robotics Elements - Positioned in margins, not overlapping content */}
        {/* Top corners and edges */}
        <div
          className="combat-element -top-8 right-8 animate-rotate-slow"
          style={{ width: "100px", height: "100px", opacity: 0.25 }}
        >
          <img
            src="/circular-saw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element top-8 -right-12 animate-rotate delay-100"
          style={{ width: "80px", height: "80px", opacity: 0.2 }}
        >
          <img
            src="/gear.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element -top-6 left-8 animate-rotate-slow delay-200"
          style={{ width: "90px", height: "90px", opacity: 0.22 }}
        >
          <img
            src="/circular-saw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element top-12 -left-10 animate-rotate delay-300"
          style={{ width: "70px", height: "70px", opacity: 0.18 }}
        >
          <img
            src="/gear.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        {/* Left edge - between sections */}
        <div
          className="combat-element top-1/3 -left-16 animate-rotate-slow delay-400"
          style={{ width: "85px", height: "85px", opacity: 0.2 }}
        >
          <img
            src="/circular-saw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element top-1/2 -left-12 animate-rotate delay-500"
          style={{ width: "75px", height: "75px", opacity: 0.18 }}
        >
          <img
            src="/gear.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element top-2/3 -left-14 animate-rotate-slow delay-100"
          style={{ width: "65px", height: "65px", opacity: 0.2 }}
        >
          <img
            src="/screw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        {/* Right edge - between sections */}
        <div
          className="combat-element top-1/4 -right-14 animate-rotate delay-200"
          style={{ width: "90px", height: "90px", opacity: 0.2 }}
        >
          <img
            src="/gear.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element top-1/2 -right-10 animate-rotate-slow delay-300"
          style={{ width: "80px", height: "80px", opacity: 0.22 }}
        >
          <img
            src="/circular-saw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element top-3/4 -right-12 animate-rotate delay-400"
          style={{ width: "70px", height: "70px", opacity: 0.18 }}
        >
          <img
            src="/gear.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        {/* Bottom corners and edges */}
        <div
          className="combat-element -bottom-8 right-12 animate-rotate-slow delay-500"
          style={{ width: "95px", height: "95px", opacity: 0.2 }}
        >
          <img
            src="/circular-saw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element bottom-8 -right-10 animate-rotate delay-100"
          style={{ width: "75px", height: "75px", opacity: 0.18 }}
        >
          <img
            src="/gear.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element -bottom-6 left-10 animate-rotate-slow delay-200"
          style={{ width: "85px", height: "85px", opacity: 0.22 }}
        >
          <img
            src="/circular-saw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element bottom-12 -left-8 animate-rotate delay-300"
          style={{ width: "70px", height: "70px", opacity: 0.18 }}
        >
          <img
            src="/gear.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        {/* Hammer - floating in empty space */}
        <div
          className="combat-element top-1/4 left-1/6 animate-float delay-400"
          style={{ width: "55px", height: "55px", opacity: 0.15 }}
        >
          <img
            src="/hammer.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        <div
          className="combat-element bottom-1/4 right-1/5 animate-float-slow delay-500"
          style={{ width: "60px", height: "60px", opacity: 0.15 }}
        >
          <img
            src="/hammer.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
              transform: "rotate(20deg)",
            }}
          />
        </div>

        {/* More screws scattered */}
        <div
          className="combat-element top-2/5 left-1/8 animate-rotate-slow delay-100"
          style={{ width: "45px", height: "45px", opacity: 0.16 }}
        >
          <img
            src="/screw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
        </div>

        <div
          className="combat-element bottom-2/5 right-1/6 animate-rotate delay-200"
          style={{ width: "50px", height: "50px", opacity: 0.17 }}
        >
          <img
            src="/screw.svg"
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
            }}
          />
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
              {/* Decorative circular saw overlay - positioned outside image */}
              <div className="absolute -top-8 -right-8 w-24 h-24 opacity-20 animate-rotate-slow">
                <img
                  src="/circular-saw.svg"
                  alt=""
                  className="w-full h-full"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7158%) hue-rotate(352deg) brightness(95%) contrast(88%)",
                  }}
                />
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
