import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-300">
      {/* Hero Section */}
      <section className="brutal-border-b bg-yellow-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32">
          <div className="mb-12">
            <div className="brutal-border bg-white p-4 inline-block brutal-shadow-sm">
              <Image
                src="/robot_logo.svg"
                alt="ARC Logo"
                width={64}
                height={64}
                className="mb-0"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black mb-6 leading-tight uppercase">
            Advanced RMIT
            <br />
            <span className="bg-cyan-400 text-black px-4 py-2 inline-block brutal-shadow-sm">
              Combat-Robotics
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black mb-12 leading-tight max-w-2xl">
            A student-led engineering collective building combat robots and
            exploring the boundaries of robotics innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="brutal-border bg-white text-black px-8 py-4 text-base font-black tracking-wide uppercase brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              View Work
            </Link>
            <Link
              href="#about"
              className="brutal-border bg-black text-white px-8 py-4 text-base font-black tracking-wide uppercase brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="brutal-border-b bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="brutal-border bg-cyan-400 p-6 brutal-shadow-sm">
              <h2 className="text-lg font-black tracking-wide text-black uppercase mb-4">
                What We Do
              </h2>
              <p className="text-black font-bold leading-tight">
                Design, build, and compete with combat robots. We bring together
                students from various engineering disciplines.
              </p>
            </div>
            <div className="brutal-border bg-yellow-300 p-6 brutal-shadow-sm">
              <h2 className="text-lg font-black tracking-wide text-black uppercase mb-4">
                Our Approach
              </h2>
              <p className="text-black font-bold leading-tight">
                Hands-on learning through real projects. We believe the best way
                to learn engineering is by building machines.
              </p>
            </div>
            <div className="brutal-border bg-red-400 p-6 brutal-shadow-sm">
              <h2 className="text-lg font-black tracking-wide text-black uppercase mb-4">
                Community
              </h2>
              <p className="text-black font-bold leading-tight">
                A collaborative space for passionate engineers to share
                knowledge and push boundaries.
              </p>
            </div>
          </div>

          <div className="pt-16 brutal-border-t">
            <h2 className="text-5xl font-black text-black mb-6 uppercase">
              About ARC
            </h2>
            <div className="space-y-6 text-black leading-relaxed font-bold max-w-2xl">
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
                className="brutal-border bg-black text-white px-6 py-3 text-sm font-black tracking-wide uppercase brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block"
              >
                Explore our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="brutal-border-b bg-cyan-400">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <h2 className="text-5xl font-black text-black mb-8 uppercase">
            Connect
          </h2>
          <p className="text-black mb-12 font-bold leading-tight max-w-xl text-lg">
            Follow our journey, see our builds, and stay updated with
            competition highlights and engineering insights.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/rmitarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-white text-black px-6 py-3 text-sm font-black tracking-wide uppercase brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/advanced-rmit-combat-roboticsrmit-battlebots"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-white text-black px-6 py-3 text-sm font-black tracking-wide uppercase brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RMIT-BattleBots"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-white text-black px-6 py-3 text-sm font-black tracking-wide uppercase brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
