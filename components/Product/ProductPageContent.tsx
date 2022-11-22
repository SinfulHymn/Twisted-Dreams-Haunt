import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import RecommendedList from "./RecommendedList";
// testing

export default function ProductPageContent({ product }) {
  console.log(product.images.edges[0].node.originalSrc);
  const images = [];

  // product.images.edges.map((image, i) => {
  //     images.push(
  //         <SwiperSlide key={`slide-${i}`}>
  //             <Image
  //                 src={image.node.originalSrc}
  //                 alt={(image.node.altText)|| "Product Image"}
  //                 fill
  //                 className="object-cover" />
  //         </SwiperSlide>
  //     )
  // })

  // SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      <div className="flex-grow flex flex-col py-10">
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-stat md:-space-y-4 md:space-x-4 lg:space-x-10 lg:max-w-6xl w-11/12 mx-auto">
          <div className=" my-0 sm:my-auto w-full max-w-lg bg-slate-900 rounded-lg overflow-hidden shadow-lg md:w-1/2 text-white border border-[#9d6524]">
            <div className="  relative h-96 w-full">
              <Image
                src={product.images.edges[0].node.originalSrc}
                alt={product.images.edges[0].node.altText}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
          <ProductForm product={product} />
        </div>
        <p className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto dark:text-white">
          {product.description}
        </p>
      </div>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </>
  );
}
