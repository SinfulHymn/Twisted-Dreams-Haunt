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
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/store/products/${handle}`}>
        <Image
          className="object-cover h-[150px] xs:h-[175px] sm:h-[240px] md:h-[200px] lg:h-[200px] xl:h-[280px] 2xl:h-[300px] w-full"
          src={productImage}
          alt={title}
          width={1000}
          height={1000}
          quality={100}
        />
      </Link>
      <div className="p-5">
        <Link href={`/store/products/${handle}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {formatter.format(amount)}
        </p>
        <a
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
