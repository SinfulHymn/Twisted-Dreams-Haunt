import { useState, useRef } from 'react'
import Image from 'next/image'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

function ProductImage({ images }) {
    
    const [mainImg, setMainImg] = useState(
        {
            src: images[0].src,
            alt: images[0].variableValues.handle
        }
    )
    const ref = useRef<HTMLInputElement>(null)

    function scroll(scrollOffset) {
        ref.current.scrollLeft += scrollOffset
    }

    return (
        <div className="w-full md:w-1/2 max-w-md rounded shadow-lg">
            <div className="relative h-96">
                <Image
                    src={mainImg?.src}
                    alt={mainImg?.alt}
                    fill
                    className="transform duration-500 ease-in-out hover:scale-110 hover:rounded-md hover:z-20"
                />
            </div>
            <div className="relative flex ">
                <button
                    aria-label="left-scroll"
                    className="h-32 bg-galleryButton hover:bg-galleryButtonHover  absolute left-0 z-10 opacity-80"
                    onClick={() => scroll(-300)}
                >
                    <HiOutlineArrowNarrowLeft className="w-5 mx-1 text-white font-bold" />
                </button>
                <div
                    ref={ref}
                    style={{ scrollBehavior: "smooth" }}
                    className="flex space-x-1 w-full overflow-auto  border-palette-lighter"
                >
                    {
                        images.map((image, index) => (
                            <button
                                key={index}
                                className="relative w-40 h-32 flex-shrink-0 rounded-sm "
                                onClick={() => setMainImg({ src: image.src, alt: image.variableValues.handle })}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.variableValues.handle}
                                    fill
                                    className=""
                                />
                            </button>
                        ))
                    }
                </div>
                <button
                    aria-label="right-scroll"
                    className="h-32 bg-galleryButton hover:bg-galleryButtonHover absolute right-0 z-10 opacity-75"
                    onClick={() => scroll(300)}
                >
                    <HiOutlineArrowNarrowRight className="w-5 mx-1 text-white font-bold" />
                </button>
            </div>
        </div>
    )
}

export default ProductImage
