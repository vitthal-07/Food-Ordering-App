import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

export default function Header() {
    return (
        <div className='border-b border-orange-500 py-6'>
            <div className='container flex justify-between items-center mx-auto '>
                <Link
                    to='/'
                    className='text-3xl font-bold tracking-wide text-orange-500'
                >
                    Feastly
                </Link>
                <div className='md:hidden'>
                    <MobileNav />
                </div>
                <div className='hidden md:block'>
                    <MainNav />
                </div>
            </div>
        </div>
    );
}
