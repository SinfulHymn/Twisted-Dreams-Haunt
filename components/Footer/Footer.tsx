import Link from "next/link"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import Socials from "./Socials"

const Footer = () => {
    return (
        <footer className="relative w-full min-h-[400px] sm:min-h-[320px] bg-footer bg-contain bg-no-repeat bg-center z-0 overflow-hidden font-custom2 text-gray-300 ">

            <div className="absolute w-full h-full bg-black bg-opacity-90 -z-40 block border-yellow-800 "></div>

            <div className=" flex flex-col w-full h-full justify-center items-center  border-green-800 ">

                <div className="relative grow flex flex-col items-center justify-center text-center z-10">
                    <div className="block z-20 leading-10 text-sm ">
                        <Link href={'/about'} className='text-main-red block p-4 hover:text-white text-3xl font-semibold'>Sign Your Waiver</Link>
                            
                        <p className="block p-2 text-3xl font-medium">
                            Twisted Dreams Haunted House
                        </p>
                    <Socials></Socials>
                    </div>

                    <div className="leading-0 text-lg font-semibold">
                        <p className="">
                            Your Neighborly Haunt in Orange County
                        </p>
                        <p>
                            5815 panama drive, Buena Park, CA 90621
                        </p>
                    </div>

                </div>

                <div className="flex flex-col flex-end w-full justify-center items-center text-xs py-1 font-semibold">
                    <p>
                        Created by <Link href="https://github.com/Kmachappy" target="_blank" className="font-medium hover:text-main-red" rel="noreferrer">Alejandro Rojas 🔪</Link>
                    </p>
                    <p>
                        Copyright © 2022 Twisted Dreams Haunted House
                    </p>
                </div>

            </div>

        </footer>
    )
}

export default Footer