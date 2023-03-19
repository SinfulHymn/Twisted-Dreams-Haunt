import "../styles/globals.css";
import ShopProvider from "@context/shopContext";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { fetchAPI } from "../lib/strapi.js";
import { getStrapiMedia } from "../lib/media";

import Layout from "@components/global/Layout";
import Transition from "@components/Animations/PageTransition";

export const GlobalContext = createContext({});

export default function App({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  console.log(global);
  return (
    <ShopProvider>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ShopProvider>
  );
}
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
// App.getInitialProps = async (ctx) => {

//   // Fetch global site settings from Strapi
//   const globalRes = await fetchAPI("/global", {
//     populate: {
//       favicon: "*",
//       defaultSeo: {
//         populate: "*",
//       },
//     },
//   });
//   // Pass the data to our page via props
//   return { pageProps: { global: globalRes.data } };
// };
