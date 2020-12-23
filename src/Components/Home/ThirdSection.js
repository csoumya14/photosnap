import React from 'react';
import styled from 'styled-components';
import designForEveryone from '../assets/home/mobile/designed-for-everyone.jpg';
import bigScreenImg from '../assets/home/desktop/designed-for-everyone.jpg';
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
    grid-template-columns: minmax(387px, auto) minmax(273px, auto);
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
const ImageContainer = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;
const DesignedEveryoneImg = styled.img`
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
    height: 25.9375rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 273px;

    object-fit: cover;
    height: 600px;
  }
`;
const ThirdSection = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 26.2rem;
    display: flex;
    flex-direction: column;
    color: #000000;
    .heading3 {
      margin-top: 5rem;
      margin-left: 2.06rem;
      width: 19.8rem;
      height: 5rem;
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      letter-spacing: 3.33333px;
      text-transform: uppercase;
    }
    .para3 {
      width: 19.9rem;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;
      margin-left: 2.06rem;
      margin-top: 0rem;
    }
    .link3 {
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
    .heading3 {
      margin-top: 5rem;
      margin-left: 2.06rem;
      width: 25rem;
      height: 5rem;
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      letter-spacing: 3.33333px;
      text-transform: uppercase;
    }
    .para3 {
      width: 25.9rem;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;
      margin-left: 2.06rem;
      margin-top: 0rem;
    }
    .link3 {
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
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    width: 495px;
    height: 600px;
    display: flex;
    flex-direction: column;
    color: #000000;
    .heading3 {
      margin-top: 160px;
      margin-left: 54px;
      width: 387px;
      height: 96px;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
    }
    .para3 {
      width: 387px;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;
      margin-left: 54px;
      margin-top: 0rem;
    }
    .link3 {
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-top: 48px;
      margin-left: 54px;
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
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    width: 495px;
    height: 600px;
    display: flex;
    flex-direction: column;
    color: #000000;
    .heading3 {
      margin-top: 160px;
      margin-left: 112px;
      width: 387px;
      height: 96px;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
    }
    .para3 {
      font-size: 15px;
      font-weight: 400;
      width: 387px;
      opacity: 0.6;
      line-height: 25px;
      margin-left: 112px;
      margin-top: 0rem;
    }
    .link3 {
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-top: 48px;
      margin-left: 112px;
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
`;

const SecondMiddleSection = () => {
  const [isSmallScreen] = useViewPort();
  return (
    <SecondSectionContainer>
      <ImageContainer>
        {isSmallScreen ? (
          <DesignedEveryoneImg
            src={designForEveryone}
            alt="an image of a man holding a professional camera"
          />
        ) : (
          <div className="image-container">
            <DesignedEveryoneImg
              src={bigScreenImg}
              alt="an image of a man holding a professional camera"
            />
          </div>
        )}
      </ImageContainer>
      <ThirdSection>
        <h1 className="heading3">Designed For Everyone</h1>
        <p className="para3">
          Photosnap can help you create stories that resonate with your audience. Our tool is
          designed for photographers of all level, brands, businesses you name it.
        </p>
        <a href="#/" className="link3">
          View the stories{' '}
          <span>
            <img className="arrow-image" src={arrow} alt=""></img>
          </span>
        </a>
      </ThirdSection>
    </SecondSectionContainer>
  );
};

export default SecondMiddleSection;
