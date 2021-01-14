import React from 'react';
import styled from 'styled-components';
import hero from '../assets/stories/mobile/moon-of-appalacia.jpg';
import desktopImg from '../assets/stories/desktop/moon-of-appalacia.jpg';
import tabScreenImg from '../assets/stories/tablet/moon-of-appalacia.jpg';

import MiddleSection from './StoriesMiddleSection';

const FirstSectionContainer = styled.section`
  width: 100vw;
  max-width: 100%;

  @media only screen and (min-width: 421px) and (max-width: 767px) {
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
  width: 100vw;
  max-width: 100%;
  height: 317px;
  margin: 0px;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    border: 1px solid transparent;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 650px;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    border: 1px solid transparent;
    margin: 0px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    height: 650px;
    max-width: 100%;
    z-index: -1;
    display: block;
    overflow: hidden;
    border: 1px solid transparent;
    margin: 0px;
    position: absolute;
  }
`;
const TextSection = styled.div`
  width: 50vw;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 122px;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 122px;
  }
`;

const FirstSection = () => {
  return (
    <FirstSectionContainer>
      <ImageSection>
        <picture className="picture">
          <source media="(min-width:1024px)" srcSet={desktopImg}></source>
          <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
          <img
            src={hero}
            alt=" a woman holding camera during sunset or sunrise"
            className="hero-image"
          ></img>
        </picture>
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
