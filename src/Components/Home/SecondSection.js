import React from 'react';
import styled from 'styled-components';
import beautifulStories from '../assets/home/mobile/beautiful-stories.jpg';
import bigScreenImg from '../assets/home/desktop/beautiful-stories.jpg';
import arrow from '../assets/shared/desktop/arrow.svg';
import { useViewPort } from '../CustomViewPort';

const SecondSectionContainer = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: minmax(273px, auto) minmax(495px, auto);
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 650px;
    .image-container {
      width: 273px;
      overflow: hidden;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 600px;
  }
`;

const BeautifulStoryImg = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 16.9375rem;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 20.9375rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70vw;
    object-fit: cover;
    height: 600px;
  }
`;
const SecondSection = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 26.2rem;
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
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 26.2rem;
    display: flex;
    flex-direction: column;
    color: #000000;
    .heading2 {
      margin-top: 5rem;
      margin-left: 2.06rem;
      width: 25.8rem;
      height: 5.5rem;
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
      margin-left: 3rem;
      height: 0.75rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 495px;
    height: 600px;
  }
`;
const TextSection = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 387px;
    height: 329px;
    margin-top: 136px;
    margin-left: 54px;
    margin-right: 54px;
    margin-bottom: 135px;

    .heading2 {
      height: 144px;
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
      padding-top: 48px;
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
    width: 387px;
    height: 329px;
    margin-top: 136px;
    margin-left: 112px;
    margin-bottom: 135px;
    .heading2 {
      height: 144px;

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
      padding-top: 48px;
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
`;

const MiddleSection = () => {
  const [isSmallScreen] = useViewPort();
  return (
    <SecondSectionContainer>
      {isSmallScreen ? (
        <BeautifulStoryImg
          src={beautifulStories}
          alt="an image of a table with laptop, books and writing materials neatly arranged"
        />
      ) : (
        <div className="image-container">
          <BeautifulStoryImg
            src={bigScreenImg}
            alt="an image of a table with laptop, books and writing materials neatly arranged"
          />
        </div>
      )}
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
