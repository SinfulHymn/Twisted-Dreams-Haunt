import Image from "next/image";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Zoom,
  Autoplay,
} from "swiper";
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
            className="rounded-lg object-contain h-[300px] xs:h-[300px] sm:h-[550px] md:h-[700px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px] 3xl:h-[600px] w-full"
            src={image.node.originalSrc}
            alt={image.node.altText || "Product Image"}
            width={800}
            height={800}
          />
        </div>
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      <div className="flex-grow flex flex-col pt-6 ">
        <div className="bg-[#050910e2] mx-auto w-11/12 lg:w-11/12 xl:w-9/12 2xl:w-8/12  py-1 pb-6  xs:py-2 sm:py-4 md:py-6 rounded-lg">
          <div className="flex flex-col justify-center items-center space-y-8 md:flex-row  md:space-y-0     lg:max-w-6xl w-11/12 mx-auto mt-4 mb-10 md:space-x-4 lg:space-x-16 xl:space-x-8 2xl:space-x-10 3xl:space-x-14 ">
            <div className=" sm:my-auto w-full bg-[#09111ae2] rounded-lg overflow-hidden shadow-2xl md:w-1/2 text-white grow">
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

          <div className="p-8  3xl:max-w-4xl w-11/12 mx-auto dark:text-white shadow-2xl bg-[#09111ae2] rounded-xl ">
            <p className="text-xl font-medium border-b border-orange-600">
              Product Description
            </p>
            <p className="my-4 text-base">{product.description}</p>
            <p className="text-xl font-medium border-b border-orange-600">
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
