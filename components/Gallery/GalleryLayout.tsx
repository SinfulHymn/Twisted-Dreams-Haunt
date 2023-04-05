import MapRendered from "@components/Index/MapRendered";
import Banner from "@components/global/Banner";
const center = [33.8529527, -118.0314395];
const zoom = 10;

const AboutLayout = () => {
  return (
    <>
      <Banner title={"Gallery"} />
      <div className="container mx-auto flex flex-grow flex-col justify-center text-white">
        {/* make a div that is an about us section */}
      </div>
      <MapRendered />
    </>
  );
};

export default AboutLayout;
