import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';

const Footer = ({ footerData }) => {
  const footerImage = footerData.FooterImage.data.attributes.url;
  const warningMessage = footerData.Warning;
  const waiverText = footerData.WaiverText;
  const footerTitle = footerData.FooterTitle;
  const footerSubtitle = footerData.FooterSubTitle;
  const footerAddress = footerData.FooterAddress;
  return (
    <>
      <div className="flex items-center justify-center border-y border-red-600 py-0.5 font-custom2 font-extrabold tracking-tighter">
        <p className="px-12 text-center text-xs font-semibold text-white xs:px-0 md:text-base">
          <span className="text-xs text-red-600 md:text-lg">WARNING! </span>
          {warningMessage}
        </p>
      </div>
      <footer className="relative z-0 min-h-[400px] w-full overflow-hidden font-custom2 text-gray-300 sm:min-h-[320px] ">
        <Image
          src={footerImage}
          alt={'footer'}
          fill
          className="absolute top-0 left-0 -z-50 h-full w-full object-contain"
        />

        <div className="absolute -z-40 block h-full w-full border-yellow-800 bg-black bg-opacity-70 "></div>

        <div className=" flex h-full w-full flex-col items-center justify-center  border-green-800 ">
          <div className="relative z-10 flex grow flex-col items-center justify-center text-center">
            <div className="z-20 block leading-10 ">
              <Link
                href={'/about'}
                className="block p-4 text-3xl font-semibold text-main-red hover:text-white"
              >
                {waiverText}
              </Link>

              <p className="block p-2 text-3xl font-medium text-main-orange">
                {footerTitle}
              </p>
              <Socials></Socials>
            </div>

            <div className="text-lg font-semibold leading-6 sm:text-lg">
              <p className="px-12 py-2 text-main-orange">{footerSubtitle}</p>
              <p className="px-10 py-2 hover:text-main-red">
                <Link href={'https://goo.gl/maps/Vye9xaDydMJKiuY36'}>
                  {' '}
                  {footerAddress}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex-end flex w-full flex-col items-center justify-center pb-6 text-xs font-semibold">
            <p className=" text-">
              webpage built by{' '}
              <Link
                href="https://github.com/Kmachappy"
                target="_blank"
                className="font-medium text-main-orange hover:text-main-red"
                rel="noreferrer"
              >
                alejandro rojas &#127875;
              </Link>
            </p>
            <p className="text-main-orange">
              Copyright © 2023 Twisted Dreams Haunted House
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
