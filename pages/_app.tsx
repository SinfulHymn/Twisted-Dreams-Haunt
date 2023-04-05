import "../styles/globals.css";
import ShopProvider from "@context/shopContext";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { fetchAPI } from "../lib/strapi.js";
import Layout from "@components/global/Layout";
import Transition from "@components/Animations/PageTransition";

type GlobalDataType = {
  headerData: object;
  BackgroundImage: string;
  BannerVideo: string;
  MapIconImage: string;
  ProductImagePlaceHolder: string;
  Footer: object;
  Favicons: object;
};

export const GlobalContext = createContext<GlobalDataType | undefined>(
  undefined
);

export default function App({ Component, pageProps }: AppProps) {
  const { layout, global } = pageProps;
  // console.log(layout, 'layout', global, 'global');fadsf
  const {
    Header,
    BackgroundImage,
    BannerVideo,
    MapIconImage,
    ProductImagePlaceHolder,
    Footer,
    Favicons,
  } = layout.attributes;
  const layoutData = {
    headerData: Header,
    BackgroundImage: BackgroundImage.data.attributes.url,
    BannerVideo: BannerVideo.data.attributes.url,
    MapIconImage: MapIconImage.data[0].attributes.url,
    ProductImagePlaceHolder: ProductImagePlaceHolder.data.attributes.url,
    Footer,
    Favicons,
  };

  return (
    <GlobalContext.Provider value={layoutData}>
      <ShopProvider>
        <Layout>
          <Transition>
            <Component {...pageProps} />
          </Transition>
        </Layout>
      </ShopProvider>
    </GlobalContext.Provider>
  );
}
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
App.getInitialProps = async (ctx) => {
  // Fetch global site settings from Strapi
  const layoutRes = await fetchAPI("/layout", {
    populate: {
      BackgroundImage: { populate: "*" },
      BannerVideo: { populate: "*" },
      MapIconImage: { populate: "*" },
      ProductImagePlaceHolder: { populate: "*" },
      Header: { populate: "*" },
      Footer: { populate: "*" },
      Favicons: { populate: "*" },
    },
  });
  const globalRes = await fetchAPI("/global", {
    populate: "*",
  });

  // Pass the data to our page via props
  return { pageProps: { layout: layoutRes.data, global: globalRes.data } };
};
