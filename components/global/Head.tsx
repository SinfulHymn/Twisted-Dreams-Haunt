import Head from 'next/head';
const AppHead = ({ title, faviconData }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={faviconData.FaviconAppleTouchIcon.data.attributes.url}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={faviconData.Favicon32x32.data.attributes.url}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={faviconData.Favicon16x16.data.attributes.url}
      />
      <link rel="manifest" href={faviconData.webmanifest.data.attributes.url} />
      <link
        rel="mask-icon"
        href={faviconData.SVGSafariPinnedTab.data.attributes.url}
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#8b8b8b" />
      {/* <meta name="theme-color" content="#ffffff" /> */}
      <title>Twisted Dreams </title>
    </Head>
  );
};

export default AppHead;
