import Layout from "@components/global/Layout"
import Index from "@components/Index/IndexLayout"


export default function Home({cart}) {
  return (
    <Layout cart={cart} title="- Home">
      <Index />
    </Layout>
    )
}

