import Link from "next/link"
import { BsFacebook, BsTwitter } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="relative w-full min-h-[400px] sm:min-h-[320px] bg-contain bg-no-repeat bg-footer bg-center -z-50 overflow-hidden">

            <div className="absolute w-full h-full bg-black bg-opacity-50 -z-40"></div>

            <div className="absolute flex flex-col w-full h-full justify-center items-center text-white -z-30">

                <div className="relative grow flex flex-col items-center justify-center text-center z-10">
                    <div className=" z-20 leading-10 text-sm border">
                        <Link href={'/about'} className='block p-4 hover:text-main-red'>About</Link>

                        <p >
                            Twisted Dreams Haunted House
                        </p>
                    </div>

                    <div className="leading-0">
                        <p className="t">
                            Your Neighborly Haunt in Orange County
                        </p>
                        <p>
                            5815 panama drive, Buena Park, CA 90621
                        </p>
                    </div>

                </div>

                <div className="flex flex-col flex-end w-full justify-center items-center text-xs py-1">
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