import Link from "next/link";
import { Button } from "./ui/button"; 
import Image from 'next/image';
import logo from '../public/logo.svg';

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"



const Header = () => {
    return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/*Logo */}
            <Link href='/'>
                <Image
                src={logo}
                alt="My Logo" // Add a descriptive alt text for accessibility
                width={80} // Adjust width as needed
                height={40} // Adjust height as needed
                />
            </Link>

            {/*Desktop Nav*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
            </div>

            {/*mobile nav*/}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
    );
};

export default Header;