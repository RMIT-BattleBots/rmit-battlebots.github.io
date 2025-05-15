import React from "react";
// import Footer from "./footer";
import Navbar from "./navbar";
interface LayoutProps {
    children: React.ReactNode;
    centerMain: boolean;
}

export default function Layout({ children, centerMain = false }: LayoutProps) {
    return (
        <div className="bg-[url('/background.png')] bg-fixed bg-center text-[#E7ECEF] min-h-screen flex flex-col">
            <Navbar />
            {children}
            {/*<Footer />*/}
        </div>
    );
}
