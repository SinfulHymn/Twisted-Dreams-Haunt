import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[400px] sm:min-h-[320px] z-0 overflow-hidden font-custom2 text-gray-300 ">
      <Image
        src={"/images/footerbg-web.png"}
        alt={"footer"}
        fill
        className="absolute top-0 left-0 w-full h-full object-contain -z-50"
      />

      <div className="absolute w-full h-full bg-black bg-opacity-70 -z-40 block border-yellow-800 "></div>

      <div className=" flex flex-col w-full h-full justify-center items-center  border-green-800 ">
        <div className="relative grow flex flex-col items-center justify-center text-center z-10">
          <div className="block z-20 leading-10 ">
            <Link
              href={"/about"}
              className="text-main-red block p-4 hover:text-white text-3xl font-semibold"
            >
              Sign Your Waiver
            </Link>

            <p className="block p-2 text-3xl font-medium text-[#9d6524]">
              Twisted Dreams Haunted House
            </p>
            <Socials></Socials>
          </div>

          <div className="leading-6 text-lg sm:text-lg font-semibold">
            <p className="px-12 py-2 text-[#9d6524]">
              Your Neighborly Haunt in Orange County
            </p>
            <p className="px-10 py-2 hover:text-main-red">
              <Link href={"https://goo.gl/maps/Vye9xaDydMJKiuY36"}>
                {" "}
                5815 panama drive, Buena Park, CA 90621
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-end w-full justify-center items-center text-xs pb-6 font-semibold">
          <p className=" text-">
            webpage built by{" "}
            <Link
              href="https://github.com/Kmachappy"
              target="_blank"
              className="font-medium hover:text-main-red text-textlogo"
              rel="noreferrer"
            >
              alejandro rojas &#127875;
            </Link>
          </p>
          <p className="text-[#9d6524]">
            Copyright © 2022 Twisted Dreams Haunted House
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
