import React from "react";
// import Footer from "./footer";
import Navbar from "./navbar";
import Redbar from "./redbar";
interface LayoutProps {
    children: React.ReactNode;
    centerMain: boolean;
}

export default function Layout({ children, centerMain = false }: LayoutProps) {
    return (
        <div className="bg-[url('/background.png')] bg-cover bg-center bg-scroll text-[#E7ECEF] min-h-screen flex flex-col">
            <Navbar />
            <Redbar />
            {children}
            {/*<Footer />*/}
        </div>
    );
}
