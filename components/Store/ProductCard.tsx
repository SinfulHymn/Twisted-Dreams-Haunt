import Link from "next/link";
import Image from "next/image";
const ProductCard = ({ product }) => {
    return (
        <div className="p-2 md:p-4 lg:p-5 bg-white">
            <div className="relative flex flex-grow flex-col">
                <div className="mb-4 w-full relative overflow-hidden">
                    <Link href={"/"} className="h-full w-full overflow-hidden ">
                        <Image
                            className="object-fill h-[150px] xs:h-[175px] sm:h-[240px] md:h-[200px] lg:h-[200px] xl:h-[280px] 2xl:h-[300px] w-full"
                            src={product.image}
                            alt={product.name}
                            width={1000}
                            height={1000}
                            quality={100}
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-between">
                    <Link
                        className="block text-slate-600 font-normal font-sans text-base xs:text-lg pt-0.5 mb-1"
                        href={"/"}>{product.name}</Link>
                    <div className="mt-2">
                        <span className="font-semibold font-sans text-xl text-gray-600">${product.price}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductCard;
