import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "../components/shared/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/shared/footer";
import RobotLogo from "assets/robot_logo.svg";
import TabIcon from "../utils/tab_icon";

export const metadata: Metadata = {
  title: {
    default: "RMIT Battlebots Club",
    template: "Next.js Portfolio Starter",
  },
  description: "This is the website for the RMIT Battlebots club.",
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black light-mode dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <TabIcon />
      <body className="antialiased min-h-screen w-full">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-4 md:px-8 py-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
