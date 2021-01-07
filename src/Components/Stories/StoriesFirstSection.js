import React from 'react';
import styled from 'styled-components';
import moonImg from '../assets/stories/mobile/moon-of-appalacia.jpg';
import bigMoon from '../assets/stories/desktop/moon-of-appalacia.jpg';
import { useViewPort } from '../CustomViewPort';
import MiddleSection from './StoriesMiddleSection';

const FirstSectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    border: 1px solid transparent;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    max-width: 100%;
    border: 1px solid transparent;
    height: 650px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    max-width: 100%;
    border: 1px solid transparent;
    height: 650px;
  }
`;
const ImageSection = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    height: 317px;
    margin: 0px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    border: 1px solid transparent;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    max-width: 100%;
    height: 650px;

    z-index: -1;
    display: block;
    border: 1px solid transparent;
    margin: 0px;
    position: absolute;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    max-width: 100%;
    z-index: -1;
    display: block;
    border: 1px solid transparent;
    margin: 0px;
    position: absolute;
  }
`;
const TextSection = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    max-width: 100%;
    margin-top: 122px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    max-width: 100%;
    margin-top: 122px;
  }
`;
const MoonImg = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 19.813rem;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 27.813rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
    object-fit: cover;
    height: 650px;
    z-index: -1;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 100%;
    object-fit: cover;
    height: 650px;
    z-index: -1;
  }
`;

const FirstSection = () => {
  const [isSmallScreen] = useViewPort();

  return (
    <FirstSectionContainer>
      <ImageSection>
        {isSmallScreen ? (
          <MoonImg src={moonImg} alt="scenery of moon up in the sky behind mountains " />
        ) : (
          <MoonImg src={bigMoon} alt="scenery of moon up in the sky behind mountains " />
        )}
      </ImageSection>
      <TextSection>
        <MiddleSection />
      </TextSection>
    </FirstSectionContainer>
  );
};

export default FirstSection;

/*
<ImageSection>
        
      </ImageSection>
      */
