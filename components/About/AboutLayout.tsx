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
        <div className="grid grid-cols-1 gap-y-10 gap-x-10 md:grid-cols-2 ">
          <div className=" mx-auto w-full border-main-orange md:w-8/12">
            <Image
              src={aboutImage}
              alt="About Us"
              width={500}
              height={500}
              className=" h-full  w-full object-contain"
            />
          </div>
          <div className="prose lg:prose-xl flex-1 space-y-6 rounded-xl bg-galleryButton p-6">
            <h1 className=" just border-b border-b-main-orange font-custom2 text-4xl font-bold text-main-orange">
              {aboutTitle}
            </h1>
            <p className="pro font-custom2 text-lg font-bold text-textlogo  sm:text-xl">
              {aboutDescription}
            </p>
            <p className=" font-custom2 text-lg font-bold text-textlogo sm:text-2xl">
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
