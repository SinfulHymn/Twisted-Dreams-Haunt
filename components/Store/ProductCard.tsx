import Link from "next/link";
import Image from "next/image";
import { formatter } from "@utils/helpers";

const ProductCard = ({ product }) => {
  const { id, title, images, priceRange, handle } = product.node;

  const amount = priceRange.minVariantPrice.amount;
  const productImage = images.edges[0]
    ? images.edges[0].node.originalSrc
    : "/images/placeholder.jpg";

  return (
    // 050910ef
    <div className="rounded-xl bg-zinc-900 bg-opacity-90 p-3 md:p-4 lg:p-6">
      <Link className="" href={`/store/products/${handle}`}>
        <div className="relative flex flex-grow flex-col">
          <div className="relative mb-4 w-full overflow-hidden">
            <div className="h-full w-full overflow-hidden rounded-lg bg-black">
              <Image
                className=" h-[220px] w-full  rounded-lg  object-contain sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] 2xl:h-[340px] 3xl:h-[360px]"
                src={productImage}
                alt={title}
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-1 block pt-0.5 font-sans text-base font-semibold text-gray-200 hover:text-main-red lg:text-xl">
              {title}
            </div>
            <div className="mt-2">
              <span className="font-sans text-xl font-semibold text-main-red lg:text-2xl">
                {formatter.format(amount)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
