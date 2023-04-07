import React from 'react';
import VideoHero from './VideoHero';
import Content from './Content';

const IndexLayout = ({ heroData, contentData }) => {
  return (
    <>
      <VideoHero heroData={heroData} />
      <Content contentData={contentData} />
    </>
  );
};

export default IndexLayout;
