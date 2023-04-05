import React, { useContext } from "react";
import Header from "@components/Header/Header";
import Foooter from "@components/Footer/Footer";
import AppHead from "./Head";
import Image from "next/image";
import { GlobalContext } from "@pages/_app";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const layoutData = useContext(GlobalContext);
  const { headerData, BackgroundImage, Footer, Favicons } = layoutData;

  if (!global) {
    return null; // Or render a loading spinner, error message, etc.
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <AppHead title={title} faviconData={Favicons} />
        <Header headerData={headerData} />
        <main className="relative flex flex-grow flex-col pt-[60px]">
          <Image
            fill
            className="-z-50  object-contain"
            src={BackgroundImage}
            alt="TDH"
            quality={100}
          />
          <div className="absolute -z-40 block h-full w-full bg-black bg-opacity-90 "></div>
          {children}
        </main>
        <Foooter footerData={Footer} />
      </div>
    </>
  );
};

export default Layout;
