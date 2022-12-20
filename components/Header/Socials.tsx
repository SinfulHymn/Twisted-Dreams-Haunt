import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok, FaShoppingCart } from "react-icons/fa";
import CartButton from "./CartButton";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="order-2 hidden items-center justify-center sm:flex sm:flex-[1_1_0] sm:justify-end">
      <a
        href={"https://www.instagram.com/twisted_dreams_haunt/"}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:text-main-red"
      >
        <BsInstagram className="text-2xl " />
      </a>
      <a
        href={"https://twitter.com/TDHAUNT"}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:text-main-red"
      >
        <BsTwitter className="text-2xl " />
      </a>
      <a
        href={"https://www.tiktok.com/@twisteddreamshaunt"}
        target="_blank"
        rel="noopener noreferrer"
        className=" p-4 hover:text-main-red"
      >
        <FaTiktok className="text-2xl " />
      </a>
      <CartButton />
    </div>
  );
};

export default Socials;
