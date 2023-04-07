import Image from 'next/image';
export default function InfoSectionRight({ data }) {
  const { TitleText, ImageSection, DescriptionText } = data;
  const imageUrl = ImageSection.data.attributes.url;
  return (
    <div className="flex min-h-[400px]">
      <div className="relative w-[100%] md:w-[60%]">
        <Image
          src={imageUrl}
          alt="Twisted Dreams Haunt"
          className="object-cover object-[50%_0%] md:object-[20%_20%]"
          fill
        />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden  md:hidden">
          <div className="flex h-full flex-col items-center justify-center bg-[#000000] bg-opacity-50 p-2 text-[#BABABA]">
            <h4 className="truncate whitespace-normal px-8 text-left text-xs font-semibold leading-normal  ">
              <div className="flex w-full items-center justify-center text-center font-custom2 text-2xl font-extrabold text-main-orange ">
                {TitleText}
              </div>
              {DescriptionText}
            </h4>
          </div>
        </div>
      </div>

      <div className="hidden w-[40%] md:block">
        <div className="flex flex-col items-center justify-center p-4 text-[#BABABA]">
          <h3 className="mb-4 text-center font-custom2 text-xl font-bold text-main-orange lg:text-3xl">
            {TitleText}
          </h3>
          <h4 className="px-6 text-left leading-normal sm:px-10">
            {DescriptionText}
          </h4>
        </div>
      </div>
    </div>
  );
}
