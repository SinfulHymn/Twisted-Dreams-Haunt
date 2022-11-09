import Layout from "@components/global/Layout"
import Index from "@components/Index/Index"
import { shopifyClient, parseShopifyResponse } from '@lib/shopify'

export default function Home() {
  
  return (
    <Layout title="- Home">
      <Index />
    </Layout>
    )
}


