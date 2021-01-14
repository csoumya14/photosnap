import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';
import hero from '../assets/home/mobile/create-and-share.jpg';
import desktopImg from '../assets/home/desktop/create-and-share.jpg';
import tabScreenImg from '../assets/home/tablet/create-and-share.jpg';

const FirstSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    height: 650px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1.3fr;
  }
`;
const ImageSection = styled.div`
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 2/3;
    height: 490px;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column-start: 2/3;
    height: 650px;
    overflow: hidden;
  }
`;

const FirstSectionText = styled.section`
  background-color: #000000;
  height: 490px;
  margin-top: -5.5px;

  .pink-rectangle {
    position: absolute;
    width: 128px;
    height: 6px;
    left: 33px;
    background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 1/2;
    height: 490px;
    overflow: hidden;
    background-color: #000000;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    background: #000000;
    color: #ffffff;
    height: 650px;
    grid-row: 1/2;
    grid-column: 1/2;
    .pink-rectangle {
      position: absolute;
      width: 6px;
      height: 304px;
      left: 0px;
      margin-top: 174px;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
  }
`;
const TextSection = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  .heading1 {
    margin-top: 5rem;
    width: calc(100% - 70px);
    height: 120px;
    font-size: 32px;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: 3.33333px;
    text-transform: uppercase;
  }
  .para1 {
    width: calc(100% - 70px);
    font-size: 15px;
    font-weight: 400;
    opacity: 0.6;
    line-height: 25px;

    margin-top: 1rem;
  }
  .link1 {
    text-decoration: none;
    width: calc(100% - 70px);
    color: #fff;
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
    filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .pink-rectangle {
      margin-left: 53px;
    }
    .para1 {
      margin-top: 2rem;
    }
    .arrow-image {
      margin-left: 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 387px;
    height: 304px;
    margin-top: 80px;
    margin-left: 44px;
    margin-right: 54px;
    margin-bottom: 173px;

    .heading1 {
      margin-top: 6rem;
      width: 387px;
      height: 144px;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.16667px;
    }
    .para1 {
      width: 387px;
      margin-top: 0rem;
    }

    .link1 {
      width: 387px;
      margin-top: 25px;
    }

    .arrow-image {
      margin-top: 5px;
    }
  }
`;

const TopSection = () => {
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
      <FirstSectionText>
        <div className="pink-rectangle"></div>
        <TextSection>
          <h1 className="heading1"> Create and share your photo Stories.</h1>
          <p className="para1">
            Photosnap is a platform for photographers and visual storytellers. We make it easy to
            share photos, tell stories and connect with others.
          </p>
          <a href="#/" className="link1">
            Get an invite{' '}
            <span>
              <img className="arrow-image" src={arrow} alt=""></img>
            </span>
          </a>
        </TextSection>
      </FirstSectionText>
    </FirstSectionContainer>
  );
};

export default TopSection;
