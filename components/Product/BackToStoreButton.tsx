import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import Link from "next/link";

function BackToStoreButton() {
  return (
    <Link
      href="/store"
      passHref
      aria-label="back-to-products"
      className="font-primary focus:ring-palette-light flex w-full items-center justify-center rounded-md bg-galleryButton py-3 
      text-lg font-semibold leading-relaxed text-white hover:bg-galleryButtonHover focus:outline-none focus:ring-1"
    >
      <HiOutlineArrowNarrowLeft className="mr-2 inline-flex w-4" />
      Back To All Products
    </Link>
  );
}

export default BackToStoreButton;
