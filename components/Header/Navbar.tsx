import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Squash as Squash } from "hamburger-react";
import Socials from "./Socials";
import SocialsMobile from "./SocialsMobile";
import { useContext } from "react";
import { CartContext } from "@context/shopContext";
import MiniCart from "@components/Product/MiniCart";
import CartButton from "./CartButton";
const Navbar = (): React.ReactElement => {
  const { cart } = useContext(CartContext);

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="absolute z-30 w-full bg-black ">
      <div className="container mx-auto ">
        <nav className="flex flex-wrap items-center justify-between px-1 text-white">
          {/* logo */}
          <div className=" flex-0 items-center  justify-center sm:flex-[1_1_0]">
            <Link href={"/"}>
              <Image
                className="p-1"
                src={"/images/twisted-dreams-main.png"}
                alt={"Logo"}
                width={200}
                height={60}
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </Link>
          </div>
          {/* hamburger menu */}

          <div className="order-3 ml-4 flex items-center justify-center lg:hidden ">
            <div className="sm:hidden">
              <CartButton />
            </div>
            <Squash
              color="#FFF"
              label="Show menu"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          {/* end hamburger menu */}

          {/* nav */}
          <div
            className={
              "order-3 w-full lg:order-2 lg:block lg:flex-[1_1_0] " +
              (isOpen ? "block" : "hidden")
            }
          >
            <SocialsMobile />
            <ul className="flex flex-col items-center justify-between font-custom2 text-xl font-medium lg:flex-row">
              <li>
                <Link href={"/"} className="block p-4 hover:text-main-red">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/store"} className="block p-4 hover:text-main-red">
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href={"/gallery"}
                  className="block p-4 hover:text-main-red"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="block p-4 hover:text-main-red">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="block p-4 hover:text-main-red"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* socials */}
          <Socials />

          <MiniCart cart={cart} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
