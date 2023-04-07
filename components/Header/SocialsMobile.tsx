import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

const SocialsMobile = () => {
  return (
    <div className="flex items-center justify-center sm:hidden">
      <Link
        href={'https://www.instagram.com/twisted_dreams_haunt/'}
        className="p-4 hover:text-main-red"
      >
        <BsInstagram className="text-2xl" />
      </Link>
      <Link
        href={'https://twitter.com/TDHAUNT'}
        className="p-4 hover:text-main-red"
      >
        <BsTwitter className="text-2xl" />
      </Link>
      <Link
        href={'https://www.tiktok.com/@twisteddreamshaunt'}
        className="p-4 hover:text-main-red"
      >
        <FaTiktok className="text-2xl" />
      </Link>
    </div>
  );
};

export default SocialsMobile;
