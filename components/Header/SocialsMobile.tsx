import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const SocialsMobile = () => {
    return (
        <div className="flex sm:hidden justify-center items-center">
            <Link
                href={'https://www.instagram.com/twisted_dreams_haunt/'}
                className='hover:text-main-red p-4'>
                <BsInstagram className="text-2xl" />
            </Link>
            <Link
                href={'https://twitter.com/TDHAUNT'}
                className='hover:text-main-red p-4'>
                <BsTwitter className="text-2xl" />
            </Link>
            <Link
                href={'https://www.tiktok.com/@twisteddreamshaunt'}
                className='hover:text-main-red p-4'>
                <FaTiktok className="text-2xl" />
            </Link>
        </div>
    )
}

export default SocialsMobile
