import "../styles/globals.css";
import ShopProvider from "@context/shopContext";
import type { AppProps } from "next/app";

import Layout from "@components/global/Layout";
import Transition from "@components/Animations/PageTransition";

export default function App({ Component, pageProps }: AppProps) {
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
