import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARC - Advanced RMIT Combat-Robotics",
  description: "A student-led engineering collective building combat robots and exploring the boundaries of robotics innovation.",
  icons: {
    icon: "/ARC_logo_only.png",
    apple: "/ARC_logo_only.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-stone-300">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
