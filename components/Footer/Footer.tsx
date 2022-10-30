import Link from "next/link"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="relative w-full min-h-[400px] sm:min-h-[320px] bg-contain bg-no-repeat bg-footer bg-center -z-50 overflow-hidden">

            <div className="absolute w-full h-full bg-black bg-opacity-40 -z-40"></div>

            <div className="absolute w-full h-full flex flex-col justify-center items-center border text-white">

                <div className="border flex flex-col items-center grow justify-center text-center">
                    <Link href={"/"}>
                        Sign Your Waiver
                    </Link>
                    <div className="flex sm:hidden justify-center items-center">
                        <Link href={'https://www.instagram.com/twisted_dreams_haunt/'} className='hover:text-main-red p-4'>
                            <BsInstagram className="text-2xl " />
                        </Link>
                        <Link href={'/'} className='hover:text-main-red p-4' >
                            <BsTwitter className="text-2xl " />
                        </Link>
                        <Link href={'/'} className=' p-4 hover:text-main-red'>
                            <FaTiktok className="text-2xl " />
                        </Link>
                    </div>
                    <p>
                        Twisted Dreams Haunted House
                        <br />
                        2020 Warren St, Orange County, CA 90000
                    </p>
                </div>

                <div className=" border flex-end text-xs w-full flex flex-col justify-center items-center">
                    <p>
                        Created by <Link href="https://github.com/Kmachappy" target="_blank" className="font-medium hover:text-main-red" rel="noreferrer">Alejandro Rojas 🔪</Link>
                    </p>
                    <p>Copyright © 2022 Twisted Dreams Haunted House</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer