import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/home/mobile/beautiful-stories.jpg';
import desktopImg from '../../assets/home/desktop/beautiful-stories.jpg';
import tabScreenImg from '../../assets/home/tablet/beautiful-stories.jpg';
import arrow from '../../assets/shared/desktop/arrow.svg';

const SecondSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1.3fr 1fr;
  }
`;
const ImageSection = styled.div`
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
    width: 273px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const SecondSection = styled.section`
  height: 26.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    width: 495px;
    height: 600px;
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    width: 610px;
  }
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #000000;

  .heading2 {
    width: calc(100% - 70px);
    height: 7.5rem;
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: 3.33333px;
    text-transform: uppercase;
  }

  .para2 {
    width: calc(100% - 70px);
    font-size: 15px;
    font-weight: 400;
    opacity: 0.6;
    line-height: 25px;
    margin-top: 0rem;
  }

  .link2 {
    text-decoration: none;
    width: calc(100% - 70px);
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
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

  @media only screen and (min-width: 768px) {
    height: 329px;
    width: 387px;
    padding-left: 0px;
    justify-content: space-between;

    .heading2 {
      height: 144px;
      width: 100%;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.16667px;
    }

    .para2 {
      height: 100px;
      width: 100%;
    }

    .link2 {
      width: 100%;
    }

    .arrow-image {
      margin-top: 0.4rem;
    }
  }
`;

const MiddleSection = () => {
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
