import Link from "next/link";
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
                alt="My Logo"
                width={80}
                height={40}
                priority
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