import Index from "@components/Index/IndexLayout";
import { fetchAPI } from "@lib/strapi";

export default function Home({ Hero, Content, seo }) {
  return <Index heroData={Hero} contentData={Content} />;
}

export async function getStaticProps() {
  const homePageRes = await fetchAPI("/homepage", {
    populate: {
      Hero: { populate: "*" },
      InfoBannerOne: { populate: "*" },
      InfoBannerTwo: { populate: "*" },
      AboutSection: { populate: "*" },
      InformationBlockOne: { populate: "*" },
      InformationBlockTwo: { populate: "*" },
      InformationBlockThree: { populate: "*" },
    },
  });
  return {
    props: {
      Hero: homePageRes.data.attributes.Hero,
      Content: {
        InfoBannerOne: homePageRes.data.attributes.InfoBannerOne,
        InfoBannerTwo: homePageRes.data.attributes.InfoBannerTwo,
        AboutSection: homePageRes.data.attributes.AboutSection,
        InformationBlockOne: homePageRes.data.attributes.InformationBlockOne,
        InformationBlockTwo: homePageRes.data.attributes.InformationBlockTwo,
        InformationBlockThree:
          homePageRes.data.attributes.InformationBlockThree,
      },
    },
  };
}
