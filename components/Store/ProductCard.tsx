import Link from "next/link";
import Image from "next/image";
import { formatter } from "@utils/helpers";

const ProductCard = ({ product }) => {

    const { id, title, images, priceRange, handle } = product.node;
    
    const amount = priceRange.minVariantPrice.amount;
    const productImage = images.edges[0] ? images.edges[0].node.originalSrc : "/images/placeholder.jpg";

    return (

        <div className="p-3 md:p-4 lg:p-6 bg-[#050910ef] rounded-xl">
            <Link href={`/store/products/${handle}`}>
                <div className="relative flex flex-grow flex-col">
                    <div className="mb-4 w-full relative overflow-hidden">
                        <div className="h-full w-full overflow-hidden bg-black rounded-lg">
                            <Image
                                className=" rounded-lg object-contain h-[300px] xs:h-[200px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] 2xl:h-[340px] 3xl:h-[360px] w-full"
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
                            className="block text-gray-200 font-semibold font-sans text-base lg:text-xl pt-0.5 mb-1"
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
