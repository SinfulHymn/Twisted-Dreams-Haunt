import Link from "next/link";
import Image from "next/image";
const ProductCard = ({ product }) => {
    return (
        <div className="p-2 md:p-4 lg:p-5 bg-white">
            <div className="relative flex grow flex-col">
                <div className="mb-4 w-full relative">
                    <Link href={"/"}>
                        <Image
                            className="pt-0 w-full h-full object-cover object-center"
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                        >
                        </Image>
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
