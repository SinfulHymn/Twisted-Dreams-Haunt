import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

import Link from 'next/link'

function BackToStoreButton() {
  return (
    <Link href="/" passHref
      
        aria-label="back-to-products"
        className="bg-galleryButton hover:bg-galleryButtonHover text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
      >
        <HiOutlineArrowNarrowLeft className="w-4 mr-2 inline-flex" />
        Back To All Products
      
    </Link>
  )
}

export default BackToStoreButton
