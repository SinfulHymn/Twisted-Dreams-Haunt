import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Squash as Squash } from "hamburger-react";
import Socials from "./Socials";
import SocialsMobile from "./SocialsMobile";

const Navbar = (): React.ReactElement => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="absolute bg-black w-full">
            <div className="container mx-auto ">
                <nav className="flex flex-wrap text-white items-center justify-between px-1">
                    {/* logo */}
                    <div className=' flex-0 sm:flex-[1_1_0]  justify-center items-center '>
                        <Link href={"/"} className="max-h-[80px]">
                            <Image
                                className="p-1"
                                src={"/images/twisted-dreams-main.png"}
                                alt={"Logo"}
                                width={200}
                                height={200}
                            />
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
                        className={"order-3 sm:order-2 w-full sm:flex-[1_1_0] md:w-auto md:block  " + (isOpen ? 'block' : 'hidden')}>
                        <SocialsMobile />
                        <ul className="flex flex-col sm:flex-row justify-between text-lg items-center ">
                            <li>
                                <Link href={'/merch'} className='block p-4 hover:text-main-red'>Merch</Link>
                            </li>
                            <li>
                                <Link href={'/gallery'} className=' block p-4 hover:text-main-red'>Location</Link>
                            </li>
                            <li>
                                <Link href={'/merch'} className='block p-4 hover:text-main-red'>Gallery</Link>
                            </li>
                            <li>
                                <Link href={'/location'} className='block p-4 hover:text-main-red'>About</Link>
                            </li>                            <li>
                                <Link href={'/location'} className='block p-4 hover:text-main-red'>Support</Link>
                            </li>

                        </ul>
                    </div>

                    {/* socials */}
                    <Socials />


                </nav>
            </div>
        </div>
    );
};

export default Navbar;
