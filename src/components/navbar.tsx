import Link from "next/link";

const Header = () => {

    return (

        <nav className=" bg-white h-25 flex gap-18 justify-items-stretch items-center items drop-shadow-xl" >
            <img alt={"temp"} className="object-contain rounded-md h-32 w-32" src="/Logo_Trans.png">

            </img>

            <Link href="/">
                <h1 className="text-3xl font-bold text-center">
                    <span className="text-[#000000]">Temp</span>
                </h1>
            </Link>
            <Link href="/">
                <h1 className="text-3xl font-bold text-center">
                    <span className="text-[#000000]">Temp</span>
                </h1>
            </Link>
            <Link href="/">
                <h1 className="text-3xl font-bold text-center">
                    <span className="text-[#000000]">Temp</span>
                </h1>
            </Link>
            <Link href="/">
                <h1 className="text-3xl font-bold text-center">
                    <span className="text-[#000000]">Temp</span>
                </h1>
            </Link>
        </nav>

    );
};

export default Header;