import Image from 'next/image';
import Banner from '@components/global/Banner';
import MapRendered from '@components/Index/MapRendered';

const AboutLayout = ({ aboutProps }) => {
  const aboutTitle = aboutProps.AboutTitle;
  const aboutDescription = aboutProps.AboutDescription;
  const aboutImage = aboutProps.AboutImage.data.attributes.url;

  return (
    <>
      <Banner title={'About'} />

      <div className="container mx-auto flex flex-grow flex-col justify-center border-main-orange p-6 text-white">
        {/* make a div that is an about us section */}
        <div className="flex flex-col items-center justify-center">
          <div className=" mx-auto flex flex-col items-center justify-center border-main-orange md:w-8/12">
            <Image
              src={aboutImage}
              alt="About Us"
              width={500}
              height={500}
              className=" h-full w-full rounded-2xl rounded-b-[2rem] object-contain pb-4 xl:w-3/4"
            />
          </div>
          <div className="prose lg:prose-xl w-full flex-1 space-y-6 rounded-xl bg-galleryButton p-4 sm:w-3/4 sm:p-6">
            <h1 className=" just border-b border-b-main-orange font-custom2 text-xl font-bold text-main-orange sm:text-4xl">
              {aboutTitle}
            </h1>
            <p className="pro font-custom2 text-xs font-bold text-textlogo  sm:text-xl">
              {aboutDescription}
            </p>
          </div>
        </div>
      </div>

      <MapRendered />
    </>
  );
};

export default AboutLayout;
