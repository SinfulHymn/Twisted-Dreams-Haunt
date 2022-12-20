import { useState, useRef } from "react";
import Image from "next/image";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState({
    src: images[0].src,
    alt: images[0].variableValues.handle,
  });
  const ref = useRef<HTMLInputElement>(null);

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <div className="w-full max-w-md rounded shadow-lg md:w-1/2">
      <div className="relative h-96">
        <Image
          src={mainImg?.src}
          alt={mainImg?.alt}
          fill
          className="transform duration-500 ease-in-out hover:z-20 hover:scale-110 hover:rounded-md"
        />
      </div>
      <div className="relative flex ">
        <button
          aria-label="left-scroll"
          className="absolute left-0 z-10  h-32 bg-galleryButton opacity-80 hover:bg-galleryButtonHover"
          onClick={() => scroll(-300)}
        >
          <HiOutlineArrowNarrowLeft className="mx-1 w-5 font-bold text-white" />
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="border-palette-lighter flex w-full space-x-1  overflow-auto"
        >
          {images.map((image, index) => (
            <button
              key={index}
              className="relative h-32 w-40 flex-shrink-0 rounded-sm "
              onClick={() =>
                setMainImg({ src: image.src, alt: image.variableValues.handle })
              }
            >
              <Image
                src={image.src}
                alt={image.variableValues.handle}
                fill
                className=""
              />
            </button>
          ))}
        </div>
        <button
          aria-label="right-scroll"
          className="absolute right-0 z-10 h-32 bg-galleryButton opacity-75 hover:bg-galleryButtonHover"
          onClick={() => scroll(300)}
        >
          <HiOutlineArrowNarrowRight className="mx-1 w-5 font-bold text-white" />
        </button>
      </div>
    </div>
  );
}

export default ProductImage;
