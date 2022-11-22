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
      <div className="flex-grow flex flex-col pt-10 ">
        <div className="bg-[#050910e2] mx-auto w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-8/12  py-1 xs:py-2 sm:py-4 md:py-6 rounded-lg">
          <div className="flex flex-col justify-center  items-center space-y-8 md:flex-row  md:-space-y-4 md:space-x-4 lg:space-x-16 xl:space-x-8 2xl:space-x-10 3xl:space-x-20 lg:max-w-6xl w-11/12 mx-auto mt-4 mb-10 ">
            <div className=" my-0 sm:my-auto w-full max-w-lg bg-slate-900 rounded-lg overflow-hidden shadow-2xl md:w-1/2 text-white">
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

          <p className="p-8  3xl:max-w-4xl w-11/12 mx-auto dark:text-white shadow-2xl bg-[#09111ae2] rounded-xl ">
            <p className="text-xl font-medium border-b border-orange-600">Product Description</p>
            <p className="my-4 text-base">{product.description}</p>
            <p className="text-xl font-medium border-b border-orange-600">Product Shipping</p>
            <p className="my-4 text-base">
              shipping
            </p>
          </p>
        </div>
      </div>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </>
  );
}
