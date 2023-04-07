import Price from './Price';

function ProductInfo({ title, description, price }) {
  return (
    <div className="font-primary text-white">
      <h1 className="py-4 text-4xl font-extrabold leading-relaxed sm:py-4">
        {title}
      </h1>
      <p className="py-4 text-lg font-medium">{description}</p>
      <div className="py-4 px-1 text-xl font-medium text-red-500">
        <Price currency="$" num={price} numSize="text-3xl" />
      </div>
    </div>
  );
}

export default ProductInfo;
