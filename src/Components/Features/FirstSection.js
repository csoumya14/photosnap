import React from 'react';
import styled from 'styled-components';
import tabScreenImg from '../assets/features/tablet/hero.jpg';
import desktopImg from '../assets/features/desktop/hero.jpg';
import hero from '../assets/features/mobile/hero.jpg';

const SectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    .pink-rectangle {
      position: absolute;
      width: 128px;
      height: 6px;
      left: 29px;
      margin-top: 0rem;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
`;
const ImageContainer = styled.div`
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
  @media only screen and (min-width: 1024px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
`;

const TextSection = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 18.75rem;
    background: #000000;
    margin-top: -0.4rem;
    display: flex;
    flex-direction: column;
    .heading {
      text-transform: uppercase;
      color: #ffffff;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.208rem;
      margin-left: 1.813rem;
      margin-top: 4.5rem;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: calc(100% - 70px);
      height: 6.25rem;
      margin-left: 1.813rem;
      color: #ffffff;
      opacity: 0.6;
      margin-top: 0rem;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
    background: #000000;

    height: 490px;
    display: flex;
    flex-direction: column;
    .pink-rectangle {
      width: 6px;
      height: 168px;
      position: absolute;
      margin-left: 0px;
      margin-top: 173px;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      text-transform: uppercase;
      color: #ffffff;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.208rem;
      margin-left: 48px;
      margin-top: 173px;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: 327px;
      height: 75px;
      margin-left: 48px;
      color: #ffffff;
      opacity: 0.6;
      margin-top: 0rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row: 1/2;
    grid-column: 1/2;
    background: #000000;
    height: 490px;
    display: flex;
    flex-direction: column;
    .pink-rectangle {
      width: 6px;
      height: 144px;
      position: absolute;
      margin-left: 0px;
      margin-top: 173px;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      text-transform: uppercase;
      color: #ffffff;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.208rem;
      margin-left: 48px;
      margin-top: 173px;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: 387px;
      height: 75px;
      margin-left: 48px;
      color: #ffffff;
      opacity: 0.6;
      margin-top: 0rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-row: 1/2;
    grid-column: 1/2;
    background: #000000;
    height: 490px;
    display: flex;
    flex-direction: column;

    .pink-rectangle {
      width: 6px;
      height: 144px;
      position: absolute;
      margin-left: 0px;
      margin-top: 173px;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      text-transform: uppercase;
      color: #ffffff;
      font-size: 32px;
      line-height: 40px;
      width: 387px;
      letter-spacing: 0.208rem;
      margin-left: 80px;

      margin-top: 173px;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: 387px;
      height: 75px;
      margin-left: 80px;
      color: #ffffff;
      opacity: 0.6;

      margin-top: 0rem;
    }
  }
`;

const FeatureFirstSection = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <picture className="picture">
          <source media="(min-width:1024px)" srcSet={desktopImg}></source>
          <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
          <img src={hero} alt=" a man holding camera"></img>
        </picture>
      </ImageContainer>
      <TextSection>
        <div className="pink-rectangle"></div>
        <h1 className="heading">Features</h1>
        <p className="para">
          We make sure all of our features are designed to be loved by every aspiring and even
          professional photographers who wanted to share their stories.
        </p>
      </TextSection>
    </SectionContainer>
  );
};

export default FeatureFirstSection;

/*
 {isSmallScreen ? (
          <HeroImg src={hero} alt="image of a man holding camera" />
        ) : (
          <div>
          <HeroImg src={tabScreenImg} alt="image of a man holding camera" />
          <HeroDeskImg src={desktopImg} alt="image of a man holding camera" />
        )}
        */
