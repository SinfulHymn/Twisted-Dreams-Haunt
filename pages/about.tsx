import Layout from "@components/global/Layout"
import { shopifyClient, parseShopifyResponse } from "@lib/shopify"

import AboutLayout from "@components/About/AboutLayout";

export default function About({cart}) {
  
  return (
    <Layout title="- Home">
        <AboutLayout />
    </Layout>
    )
}


