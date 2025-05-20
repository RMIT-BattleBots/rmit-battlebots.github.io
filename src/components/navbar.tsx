import Button from "@/components/button";
import Image from "next/image";

const Header = () => {

    return (

        <nav className=" bg-red-700 h-25 sticky top-0" >
            <div className="bg-white h-24 flex gap-8 justify-items-stretch items-center items drop-shadow-xl sticky top-0" >

            <Image alt={"temp"} width="5" height="5" className="object-contain rounded-md h-32 w-32" src="/Logo_Trans.png">

            </Image>

            <Button Href="/about" ButName="About Us"/>
            <Button Href="/events" ButName="Our Events"/>
            <Button Href="/teams" ButName="Our Teams"/>
            <Button Href="/contact" ButName="Contact Us"/>
            </div>
        </nav>

    );
};

export default Header;