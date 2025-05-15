import Link from "next/link";

const Header = () => {

    return (

        <nav className=" bg-red-700 h-25 sticky top-0" >
            <div className="bg-white h-24 flex gap-18 justify-items-stretch items-center items drop-shadow-xl sticky top-0" >

            <img alt={"temp"} className="object-contain rounded-md h-32 w-32" src="/Logo_Trans.png">

            </img>

            <Link href="/about">
                <h1 className="text-2xl font-bold text-center text-[#000000]">
                    About Us
                </h1>
            </Link>
            <Link href="/events">
                <h1 className="text-2xl font-bold text-center text-[#000000]">
                    Our Events
                </h1>
            </Link>
            <Link href="/teams">
                <h1 className="text-2xl font-bold text-center text-[#000000]">
                    Our Teams
                </h1>
            </Link>
            <Link href="/contact">
                <h1 className="text-2xl font-bold text-center text-[#000000]">
                    Contact Us
                </h1>
            </Link>
            </div>
        </nav>

    );
};

export default Header;