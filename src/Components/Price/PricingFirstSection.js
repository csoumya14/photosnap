import React from 'react';
import styled from 'styled-components';
import hero from '../assets/pricing/mobile/hero.jpg';
import tabScreenImg from '../assets/pricing/tablet/hero.jpg';
import desktopImg from '../assets/pricing/desktop/hero.jpg';

const SectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;

    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    border: 1px solid red;
    grid-template-areas: '. .';
  }
`;
const ImageContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 294px;
    max-width: 100%;
    overflow: hidden;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    object-fit: cover;
    height: 18.375rem;
    grid-row: 1/2;
    grid-column: 2/3;
  }
  @media only screen and (min-width: 1024px) {
    object-fit: cover;
    overflow: hidden;

    grid-row: 1/2;
    grid-column: 2/3;
  }
`;
const TextSection = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    background: #000000;
    height: 300px;
    display: flex;
    flex-direction: column;
    .pink-rectangle {
      width: 128px;
      height: 6px;
      left: 33px;
      position: absolute;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 3.333333px;
      text-transform: uppercase;
      margin-top: 72px;
      margin-left: 29px;
      color: #ffffff;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      color: #ffffff;
      opacity: 0.6;
      margin-left: 29px;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
    background: #000000;
    height: 490px;
    display: flex;
    flex-direction: column;
    background: #000000;

    .heading {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 3.333333px;
      text-transform: uppercase;
      margin-top: 72px;
      margin-left: 29px;
      color: #ffffff;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: 318px;
      color: #ffffff;
      opacity: 0.6;
      margin-left: 35px;
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
      font-size: 40px;
      line-height: 45px;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
      margin-top: 173px;
      margin-left: 54px;
      color: #ffffff;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      margin-top: 0px;
      color: #ffffff;
      opacity: 0.6;
      margin-left: 54px;
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
      font-size: 40px;
      line-height: 45px;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
      margin-top: 173px;
      width: 387px;
      align-self: center;
      color: #ffffff;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      margin-top: 0px;
      color: #ffffff;
      opacity: 0.6;
      width: 387px;
      align-self: center;
    }
  }
`;

const PriceFirstSection = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <picture className="picture">
          <source media="(min-width:1024px)" srcSet={desktopImg}></source>
          <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
          <img
            src={hero}
            alt=" a woman holding camera during sunset or sunrise"
            className="hero-image"
          ></img>
        </picture>
      </ImageContainer>
      <TextSection>
        <div className="pink-rectangle"></div>
        <h1 className="heading">Pricing</h1>
        <p className="para">
          Create a your stories. Photosnap is a platform for photographers and visual storytellers.
          It's the simple way to create and share your photos.
        </p>
      </TextSection>
    </SectionContainer>
  );
};

export default PriceFirstSection;
