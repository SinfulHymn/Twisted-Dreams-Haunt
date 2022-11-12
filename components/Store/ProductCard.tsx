import Link from "next/link";
import Image from "next/image";
import { formatter } from "@utils/helpers";

const ProductCard = ({ product }) => {

    const { id, title, images, priceRange, handle } = product.node;
    console.log(handle);
    const amount = priceRange.minVariantPrice.amount;
    const productImage = images.edges[0] ? images.edges[0].node.originalSrc : "/images/placeholder.jpg";

    return (

        <div className="p-2 md:p-4 lg:p-5 bg-white">
            <Link href={`/store/products/${handle}`}>
                <div className="relative flex flex-grow flex-col">
                    <div className="mb-4 w-full relative overflow-hidden">
                        <div className="h-full w-full overflow-hidden">
                            <Image
                                className="object-cover h-[150px] xs:h-[175px] sm:h-[240px] md:h-[200px] lg:h-[200px] xl:h-[280px] 2xl:h-[300px] w-full"
                                src={productImage}
                                alt={title}
                                width={1000}
                                height={1000}
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div
                            className="block text-slate-600 font-normal font-sans text-base xs:text-lg pt-0.5 mb-1"
                        >{title}</div>
                        <div className="mt-2">
                            <span className="font-semibold font-sans text-xl text-gray-600">{formatter.format(amount)}</span>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
