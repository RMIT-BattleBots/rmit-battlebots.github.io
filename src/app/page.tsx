import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] tech-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 md:py-40">
          <div className="mb-12">
            <div className="neon-border bg-[#1e293b] p-4 inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
              <Image
                src="/robot_logo.svg"
                alt="ARC Logo"
                width={80}
                height={80}
                className="mb-0 relative z-10 brightness-0 invert"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-white">Advanced RMIT</span>
            <br />
            <span className="neon-glow text-cyan-400">Combat-Robotics</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 mb-12 leading-relaxed max-w-2xl">
            A student-led engineering collective building combat robots and
            exploring the boundaries of robotics innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="neon-border bg-[#1e293b] text-cyan-400 px-8 py-4 text-base font-semibold tracking-wide uppercase hover:bg-cyan-500/10 hover:neon-glow transition-all inline-block"
            >
              View Work
            </Link>
            <Link
              href="#about"
              className="border-2 border-blue-500 bg-blue-500/10 text-blue-400 px-8 py-4 text-base font-semibold tracking-wide uppercase hover:bg-blue-500/20 hover:neon-glow-blue transition-all inline-block"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="tech-card p-8 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="text-4xl mb-4">⚙️</div>
              <h2 className="text-xl font-bold tracking-wide text-cyan-400 uppercase mb-4 neon-glow">
                What We Do
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Design, build, and compete with combat robots. We bring together
                students from various engineering disciplines to create
                innovative robotic systems.
              </p>
            </div>
            <div className="tech-card p-8 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="text-4xl mb-4">🔧</div>
              <h2 className="text-xl font-bold tracking-wide text-purple-400 uppercase mb-4">
                Our Approach
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Hands-on learning through real projects. We believe the best way
                to learn engineering is by building machines that can withstand
                combat.
              </p>
            </div>
            <div className="tech-card p-8 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-xl font-bold tracking-wide text-green-400 uppercase mb-4">
                Community
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A collaborative space for passionate engineers to share
                knowledge, work on projects, and push the boundaries of
                what&apos;s possible.
              </p>
            </div>
          </div>

          <div className="pt-16 border-t border-cyan-500/20">
            <h2 className="text-5xl font-bold text-white mb-6 neon-glow">
              About ARC
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed max-w-3xl">
              <p className="text-lg">
                Advanced RMIT Combat-Robotics (ARC) is a student-run engineering
                collective dedicated to building combat robots and inspiring
                hands-on innovation through technology, teamwork, and
                engineering excellence.
              </p>
              <p className="text-lg">
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
                className="neon-border bg-[#1e293b] text-cyan-400 px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-cyan-500/10 transition-all inline-block"
              >
                Explore our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 border-b border-cyan-500/20 holographic">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <h2 className="text-5xl font-bold text-white mb-8 neon-glow">
            Connect
          </h2>
          <p className="text-gray-300 mb-12 leading-relaxed max-w-xl text-lg">
            Follow our journey, see our builds, and stay updated with
            competition highlights and engineering insights.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/rmitarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:neon-border transition-all text-cyan-400"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/advanced-rmit-combat-roboticsrmit-battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:neon-border transition-all text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RMIT-BattleBots"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:neon-border transition-all text-purple-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
