import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';
import createAndShareImg from '../assets/home/mobile/create-and-share.jpg';

const FirstSectionContainer = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;
const CreateImg = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 18.375rem;
  }
`;
const FirstSection = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 26.2rem;
    max-width: 100%;
    margin-top: -0.5rem;
    background-color: #000;
    color: white;
    .heading1 {
      margin-top: 5rem;
      margin-left: 2.06rem;
      width: 19.8rem;
      height: 7.5rem;
      font-size: 32px;
      line-height: 2.5rem;
      font-weight: 700;
      letter-spacing: 3.33333px;
      text-transform: uppercase;
    }
    .para1 {
      width: 19.9rem;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;
      margin-left: 2.06rem;
      margin-top: 0rem;
    }
    .link1 {
      text-decoration: none;
      color: #fff;
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
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
`;

const TopSection = () => {
  return (
    <FirstSectionContainer>
      <CreateImg
        src={createAndShareImg}
        alt="image of a man viewing scenery of lake and mountains"
      ></CreateImg>
      <FirstSection>
        <h1 className="heading1"> Create and share your photo Stories</h1>
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
      </FirstSection>
    </FirstSectionContainer>
  );
};

export default TopSection;
