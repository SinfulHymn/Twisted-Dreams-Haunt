import Store from "@components/Store/Store";

import { Suspense } from "react";

export default function Index() {
  // console.log(products);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Store />
    </Suspense>
  );
}
