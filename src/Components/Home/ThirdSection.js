import React from 'react';
import styled from 'styled-components';
import designForEveryone from '../assets/home/mobile/designed-for-everyone.jpg';
import arrow from '../assets/shared/desktop/arrow.svg';

const SecondSectionContainer = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;
const DesignedEveryoneImg = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 16.9375rem;
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
`;

const SecondMiddleSection = () => {
  return (
    <SecondSectionContainer>
      <DesignedEveryoneImg
        src={designForEveryone}
        alt="an image of a man holding a professional camera"
      ></DesignedEveryoneImg>
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
