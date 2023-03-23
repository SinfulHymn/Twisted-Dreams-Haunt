import React from "react";
import Header from "@components/Header/Header";
import Foooter from "@components/Footer/Footer";
import AppHead from "./Head";
import Image from "next/image";

import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const router = useRouter();

  const resolveTitle = () => {
    switch (router.pathname) {
      case "/":
        return "Twisted Dreams Haunted House";
      case "/about":
        return "About Twisted Dreams Haunted House";
      case "/tickets":
        return "Tickets for Twisted Dreams Haunted House";
      case "/contact":
        return "Contact Twisted Dreams Haunted House";
      case "/gallery":
        return "Gallery for Twisted Dreams Haunted House";
      case "/faq":
        return "FAQ for Twisted Dreams Haunted House";
      case "/privacy":
        return "Privacy Policy for Twisted Dreams Haunted House";
      case "/terms":
        return "Terms of Service for Twisted Dreams Haunted House";
      case "/store":
        return "Store for Twisted Dreams Haunted House";
      default:
        return "Twisted Dreams Haunted House";
    } // end switch
  }; // end resolveTitle

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <AppHead title={title} />
        <Header />
        <main className="relative flex flex-grow flex-col pt-[60px]">
          <Image
            fill
            className="-z-50  object-contain"
            src="/images/tdh-small-web.png"
            alt="TDH"
            quality={100}
          />
          <div className="absolute -z-40 block h-full w-full bg-black bg-opacity-90 "></div>
          {children}
        </main>
        <Foooter />
      </div>
    </>
  );
};

export default Layout;
