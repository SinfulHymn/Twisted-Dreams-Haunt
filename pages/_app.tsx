import "../styles/globals.css";
import ShopProvider from "@context/shopContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>
      <Component {...pageProps} />
    </ShopProvider>
  );
}
