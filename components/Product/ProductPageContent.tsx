import Image from "next/image";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Zoom, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function ProductPageContent({ product }) {
  const images = [];

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <div className="swiper-zoom-container">
          <Image
            className="h-[300px] w-full rounded-lg object-contain xs:h-[300px] sm:h-[550px] md:h-[700px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px] 3xl:h-[600px]"
            src={image.node.originalSrc}
            alt={image.node.altText || "Product Image"}
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      <div className="flex flex-grow flex-col pt-6 ">
        <div className="mx-auto w-11/12 rounded-lg bg-zinc-700 bg-opacity-60 py-1 pb-6  xs:py-2 sm:py-4  md:py-6 lg:w-11/12 xl:w-9/12 2xl:w-8/12">
          <div className="mx-auto mt-4 mb-10 flex w-11/12 flex-col  items-center     justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 lg:max-w-6xl lg:space-x-16 xl:space-x-8 2xl:space-x-10 3xl:space-x-14 ">
            <div className=" w-full grow overflow-hidden rounded-lg bg-zinc-900 text-white shadow-2xl sm:my-auto md:w-1/2">
              <Swiper
                loop={true}
                zoom={true}
                slidesPerView={1}
                autoplay={{
                  delay: 8500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Zoom, Autoplay]}
                pagination={{
                  type: "progressbar",
                }}
                navigation={true}
                className="mySwiper"
              >
                {images}
              </Swiper>
            </div>

            <ProductForm product={product} />
          </div>

          <div className="mx-auto w-11/12 rounded-xl bg-zinc-900 p-8 text-white shadow-2xl dark:text-white 3xl:max-w-4xl ">
            <p className="border-b border-orange-600 text-xl font-medium">
              Product Description
            </p>
            <p className="my-4 text-base">{product.description}</p>
            <p className="border-b border-orange-600 text-xl font-medium">
              Product Shipping
            </p>
            <p className="my-4 text-base">shipping</p>
          </div>
        </div>
      </div>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </>
  );
}
