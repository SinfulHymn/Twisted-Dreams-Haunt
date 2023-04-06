import Store from "@components/Store/Store";
import { getProductsInCollection } from "@lib/Shopifyql";

export default function Index({ products }) {
  console.log(products);
  return <Store products={products} />;
}
