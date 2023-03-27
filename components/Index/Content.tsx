import { useState } from "react";
import MapRendered from "./MapRendered";
import InfoBanner from "./InfoBanner";
import AboutSection from "./AboutSection";
import InfoSectionLeft from "./InfoSectionLeft";
import InfoSectionRight from "./InfoSectionRight";

const Content = ({ contentData }) => {
  const infoBannerOneData = contentData.InfoBannerOne;
  const infoBannerTwoData = contentData.InfoBannerTwo;
  const aboutSectionData = contentData.AboutSection;
  const informationBlockOneData = contentData.InformationBlockOne;
  const informationBlockTwoData = contentData.InformationBlockTwo;
  const informationBlockThreeData = contentData.InformationBlockThree;

  const [value, setValue] = useState(new Date(2022, 9, 21));
  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>
      <InfoBanner data={infoBannerOneData} />
      <AboutSection aboutData={aboutSectionData} />
      <InfoBanner data={infoBannerTwoData} />

      <div>
        <InfoSectionLeft data={informationBlockOneData} />
        <InfoSectionRight data={informationBlockTwoData} />
        <InfoSectionLeft data={informationBlockThreeData} />
      </div>
      <MapRendered />
    </>
  );
};

export default Content;
