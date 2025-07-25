import RobotLogo from "../../assets/robot_logo.svg";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="mb-6">
        <RobotLogo width="120" className="mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-red-700 dark:text-red-400">
          RMIT Battlebots Club
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto">
          Welcome to the official site for the RMIT Battlebots Club!
          <br />
          Join us to build, battle, and learn robotics in a fun, inclusive
          community.
        </p>
      </div>
      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-500 dark:text-neutral-400">
            No blog posts yet. Stay tuned for club news, event recaps, and
            robotics tutorials!
          </p>
        </div>
      </div>
    </section>
  );
}
