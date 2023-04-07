import ReactPlayer from './PlayerSSRfix';
export default function AboutSection({ aboutData }) {
  const { AboutDescription, AboutTitle } = aboutData;
  return (
    <div className="py-4">
      <div className="mx-auto flex flex-col items-center justify-center md:flex-row lg:w-9/12 lg:max-w-[892px] xl:w-8/12 xl:max-w-[1140px]">
        <div className="relative w-full  md:w-1/2">
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              width={'100%'}
              height={'100%'}
              className="absolute top-0 left-0"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center p-4 text-[#BABABA] md:w-1/2">
          <h3 className="mb-4 text-center font-custom2 text-xl font-bold lg:text-2xl">
            {AboutTitle}
          </h3>
          <h4 className="px-6 text-left leading-normal sm:px-2">
            {AboutDescription}
          </h4>
        </div>
      </div>
    </div>
  );
}
