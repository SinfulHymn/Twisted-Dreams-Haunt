import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Squash as Squash } from "hamburger-react";
import Socials from "./Socials";
import SocialsMobile from "./SocialsMobile";

const Navbar = (): React.ReactElement => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="absolute bg-black w-full z-30 ">
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
                    <div className="order-3 lg:hidden ml-4 ">
                        <Squash color="#FFF" label="Show menu"
                            toggled={isOpen} toggle={setOpen} />
                    </div>
                    {/* end hamburger menu */}

                    {/* nav */}
                    <div
                        className={"order-3 lg:order-2 w-full lg:flex-[1_1_0] lg:block " + (isOpen ? 'block' : 'hidden')}>
                        <SocialsMobile />
                        <ul className="flex flex-col lg:flex-row justify-between text-xl items-center font-custom2 font-medium">
                            <li>
                                <Link href={'/store'} className='block p-4 hover:text-main-red'>Store</Link>
                            </li>
                            <li>
                                <Link href={'/gallery'} className=' block p-4 hover:text-main-red'>Location</Link>
                            </li>
                            <li>
                                <Link href={'/merch'} className='block p-4 hover:text-main-red'>Photos</Link>
                            </li>
                            <li>
                                <Link href={'/location'} className='block p-4 hover:text-main-red'>About</Link>
                            </li>                            <li>
                                <Link href={'/location'} className='block p-4 hover:text-main-red'>Contact</Link>
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
