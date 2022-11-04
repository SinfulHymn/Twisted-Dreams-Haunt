import Layout from "@components/global/Layout"
import Index from "@components/Index/Index"

export default function Home() {
  console.log(process.env.TEST)
  return (
    <Layout title="- Home">
      <Index />
    </Layout>
    )
}
