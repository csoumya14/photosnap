import React from 'react';
import styled from 'styled-components';
import hero from '../assets/home/mobile/beautiful-stories.jpg';
import desktopImg from '../assets/home/desktop/beautiful-stories.jpg';
import tabScreenImg from '../assets/home/tablet/beautiful-stories.jpg';
import arrow from '../assets/shared/desktop/arrow.svg';
import { useViewPort } from '../CustomViewPort';

const SecondSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 600px;
  }
`;
const ImageSection = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    overflow: hidden;
    width: 273px;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    width: 830px;
  }
`;

const SecondSection = styled.section`
  height: 26.2rem;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 495px;
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    width: 610px;
    height: 600px;
  }
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
  .heading2 {
    margin-top: 5rem;
    margin-left: 2.06rem;
    width: 15.8rem;
    height: 7.5rem;
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: 3.33333px;
    text-transform: uppercase;
  }
  .para2 {
    width: 19.9rem;
    font-size: 15px;
    font-weight: 400;
    opacity: 0.6;
    line-height: 25px;
    margin-left: 2.06rem;
    margin-top: 0rem;
  }
  .link2 {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    margin-left: 2.06rem;
    line-height: 16px;
    letter-spacing: 2px;
    height: 1rem;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  .arrow-image {
    width: 2.63rem;
    margin-top: 0.1rem;
    position: absolute;
    margin-left: 1rem;
    height: 0.75rem;
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .heading2 {
      width: 25.8rem;
      height: 5.5rem;
    }
    .arrow-image {
      margin-left: 3rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 329px;
    margin-top: 66px;
    margin-left: 24px;
    margin-right: 54px;
    margin-bottom: 135px;

    .heading2 {
      height: 144px;
      width: 387px;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
      color: #000000;
    }
    .para2 {
      width: 387px;
      height: 100px;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;
    }
    .link2 {
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 2px;
      margin-top: 25px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.4rem;
      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 329px;
    margin-bottom: 135px;
    .heading2 {
      height: 144px;
      margin-top: 136px;
      margin-left: 112px;
      width: 387px;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
      color: #000000;
    }
    .para2 {
      margin-left: 112px;
      width: 387px;
      height: 100px;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;
    }
    .link2 {
      text-decoration: none;
      color: #000;
      margin-left: 112px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 2px;
      padding-top: 40px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0rem;
      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
    }
  }
`;

const MiddleSection = () => {
  const [isSmallScreen] = useViewPort();
  return (
    <SecondSectionContainer>
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
      <SecondSection>
        <TextSection>
          <h1 className="heading2">Beautiful Stories every time</h1>
          <p className="para2">
            We provide design templates to ensure your stories look terrific. Easily add photos,
            text, embed maps and media from other networks. Then share your story with everyone.
          </p>
          <a href="#/" className="link2">
            View the stories{' '}
            <span>
              <img className="arrow-image" src={arrow} alt=""></img>
            </span>
          </a>
        </TextSection>
      </SecondSection>
    </SecondSectionContainer>
  );
};

export default MiddleSection;
