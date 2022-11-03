const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-center m-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
        </div>
    );
}

export default ProductCard;
