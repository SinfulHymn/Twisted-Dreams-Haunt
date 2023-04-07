import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex items-center justify-center">
      <a
        href={'https://www.instagram.com/twisted_dreams_haunt/'}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:text-main-red"
      >
        <BsInstagram className="text-2xl" />
      </a>
      <a
        href={'https://twitter.com/TDHAUNT'}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:text-main-red"
      >
        <BsTwitter className="text-2xl" />
      </a>
      <a
        href={'https://www.tiktok.com/@twisteddreamshaunt'}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:text-main-red"
      >
        <FaTiktok className="text-2xl" />
      </a>
    </div>
  );
};

export default Socials;
