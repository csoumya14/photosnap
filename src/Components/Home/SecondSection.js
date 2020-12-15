import React from 'react';
import styled from 'styled-components';
import beautifulStories from '../assets/home/mobile/beautiful-stories.jpg';
import arrow from '../assets/shared/desktop/arrow.svg';

const SecondSectionContainer = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

const BeautifulStoryImg = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 16.9375rem;
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
`;

const MiddleSection = () => {
  return (
    <SecondSectionContainer>
      <BeautifulStoryImg
        src={beautifulStories}
        alt="an image of a table with laptop, books and writing materials neatly arranged"
      ></BeautifulStoryImg>
      <SecondSection>
        <h1 className="heading2">Beautiful Stories every time</h1>
        <p className="para2">
          We provide design templates to ensure your stories look terrific. Easily add photos, text,
          embed maps and media from other networks. Then share your story with everyone.
        </p>
        <a href="#/" className="link2">
          View the stories{' '}
          <span>
            <img className="arrow-image" src={arrow} alt=""></img>
          </span>
        </a>
      </SecondSection>
    </SecondSectionContainer>
  );
};

export default MiddleSection;
