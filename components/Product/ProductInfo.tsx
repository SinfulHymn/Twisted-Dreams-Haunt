import Price from './Price'

function ProductInfo({ title, description, price }) {
  return (
    <div className="font-primary text-white">
      <h1 className="leading-relaxed font-extrabold text-4xl py-4 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg py-4">
        {description}
      </p>
      <div className="text-xl text-red-500 font-medium py-4 px-1">
        <Price
          currency="$"
          num={price}
          numSize="text-3xl"
        />
      </div>
    </div>
  )
}

export default ProductInfo
