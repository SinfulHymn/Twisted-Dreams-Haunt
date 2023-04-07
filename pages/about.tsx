import { fetchAPI } from '@lib/strapi';
import AboutLayout from '@components/About/AboutLayout';

export default function About({ aboutProps }) {
  return <AboutLayout aboutProps={aboutProps} />;
}

export async function getStaticProps() {
  const aboutPageRes = await fetchAPI('/about', {
    populate: '*',
  });
  return {
    props: {
      aboutProps: aboutPageRes.data.attributes,
    },
  };
}
