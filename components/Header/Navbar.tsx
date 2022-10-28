import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { Squash as Squash } from "hamburger-react";

const Navbar = (): React.ReactElement => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="bg-black">
            <div className="container mx-auto ">
                <nav className="flex text-white items-center justify-between px-1">
                    {/* logo */}
                    <div className=' flex-0 sm:flex-[1_1_0]  justify-center items-center '>
                        <Link href={"/"} className="max-h-[80px]">
                            <Image src={""} alt={"Logo"}>

                            </Image>
                        </Link>
                    </div>
                    
                    {/* hamburger menu */}
                    <div className="order-3 md:hidden ">
                        <Squash color="#FFF" label="Show menu"
                            toggled={isOpen} toggle={setOpen} />
                    </div>
                    {/* end hamburger menu */}

                    {/* nav */}
                    <div
                     className={"w-full sm:flex-[1_1_0] md:w-auto md:block  " + (isOpen ? 'block' : 'hidden')}>
                        <ul className="flex flex-col sm:flex-row justify-between items-center ">
                            <li>
                                <Link href={'/'} className='block p-4'>Home</Link>
                            </li>
                            <li>
                                <Link href={'/'} className=' block p-4'>About</Link>
                            </li>
                            <li>
                                <Link href={'/'} className='block p-4'>Contact</Link>
                            </li>

                        </ul>
                    </div>

                    {/* socials */}
                    <div className="flex justify-center items-center sm:flex-[1_1_0] order-2
                    
                    sm:justify-end">
                        <Link href={'/'} className=' p-4'>
                            <BsInstagram className="text-2xl" />
                        </Link>
                        <Link href={'/'} className=' p-4' >
                            <BsTwitter className="text-2xl" />
                        </Link>
                        <Link href={'/'} className=' p-4'>
                            <FaTiktok className="text-2xl" />
                        </Link>
                    </div>


                </nav>
            </div>
        </div>
    );
};

export default Navbar;
