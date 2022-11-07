import Link from "next/link";
import Image from "next/image";
const ProductCard = ({ product, productUrl }) => {
    // console.log(product);
    const { id, title, images, variants, handle } = product;
    const { src: productImage } = images[0] || {src:"/images/placeholder.jpg"};
    // console.log(`${productUrl(handle)}`);
    const { amount } = variants[0].price;
    return (
        <div className="p-2 md:p-4 lg:p-5 bg-white">
            <div className="relative flex flex-grow flex-col">
                <div className="mb-4 w-full relative overflow-hidden">
                    <div onClick={()=>productUrl(handle)} className="h-full w-full overflow-hidden">
                        <Image
                            className="object-fill h-[150px] xs:h-[175px] sm:h-[240px] md:h-[200px] lg:h-[200px] xl:h-[280px] 2xl:h-[300px] w-full"
                            src={productImage}
                            alt={title}
                            width={1000}
                            height={1000}
                            quality={100}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <Link
                        className="block text-slate-600 font-normal font-sans text-base xs:text-lg pt-0.5 mb-1"
                        href={"/"}>{title}</Link>
                    <div className="mt-2">
                        <span className="font-semibold font-sans text-xl text-gray-600">${amount}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductCard;
