import Link from "next/link";
import Image from "next/image";
import { formatter } from "@utils/helpers";

const ProductCard = ({ product }) => {

    const { id, title, images, priceRange, handle } = product.node;
    
    const amount = priceRange.minVariantPrice.amount;
    const productImage = images.edges[0] ? images.edges[0].node.originalSrc : "/images/placeholder.jpg";

    return (
        // 050910ef
        <div className="p-3 md:p-4 lg:p-6 bg-[#4d3112ab] rounded-xl">
            <Link className="" href={`/store/products/${handle}`}>
                <div className="relative flex flex-grow flex-col">
                    <div className="mb-4 w-full relative overflow-hidden">
                        <div className="h-full w-full overflow-hidden bg-black rounded-lg">
                            <Image
                                className=" rounded-lg object-contain  bg-repeat h-[240px]  sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] 2xl:h-[340px] 3xl:h-[360px] w-full"
                                src={productImage}
                                alt={title}
                                width={500}
                                height={500}
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div
                            className="block hover:text-main-red text-gray-200 font-semibold font-sans text-base lg:text-xl pt-0.5 mb-1"
                        >{title}</div>
                        <div className="mt-2">
                            <span className="font-semibold font-sans text-xl lg:text-2xl text-main-red">{formatter.format(amount)}</span>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
