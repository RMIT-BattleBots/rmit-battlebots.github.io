import Link from "next/link";

/**
 * Navigation items for the Navbar. Keys are paths/URLs, values are display names.
 * For now, About, Blog, and Contact are dummy redirects.
 */
const navItems: Record<string, { name: string }> = {
  "/": { name: "Home" },
  "/about": { name: "About" },
  "/blog": { name: "Blog" },
  "/contact": { name: "Contact" },
};

/**
 * Navbar component renders the main site navigation.
 * Uses sticky positioning on large screens.
 */
export function Navbar(): JSX.Element {
  return (
    <aside className="-ml-[8px] mb-1 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          aria-label="Main navigation"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
