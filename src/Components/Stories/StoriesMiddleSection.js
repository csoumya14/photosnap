import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';

const SectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 30.938rem;
    background: #000000;
    color: white;
    margin-top: 0rem;
    border: 1px solid transparent;
    position: relative;
    z-index: -1;
    .first-line {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 2px;
      color: #ffffff;
      padding-top: 2rem;
      margin-left: 1.813rem;
    }
    .heading {
      text-transform: uppercase;
      width: 19.875rem;
      font-size: 32px;
      line-height: 2.5rem;
      letter-spacing: 0.208rem;
      margin-left: 1.813rem;
      margin-top: 1rem;
    }
    .date {
      margin-left: 1.813rem;
      margin-top: 0rem;
      font-size: 13px;
      line-height: 17px;
      color: white;
      position: absolute;
      opacity: 0.75;
    }
    .author {
      font-size: 13px;
      line-height: 17px;
      margin-top: 1rem;
      margin-left: 9rem;
      font-style: normal;
      color: white;
    }
    .para {
      width: 19.875rem;
      height: 9.375rem;
      font-size: 15px;
      line-height: 25px;
      margin-left: 1.813rem;
      opacity: 0.6;
    }
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-left: 1.813rem;
      padding-bottom: 3rem;
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
      margin-top: 0.5rem;
      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 30.938rem;
    background: #000000;
    color: white;
    margin-top: -0.5rem;
    position: absolute;
    .first-line {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 2px;
      color: #ffffff;
      margin-top: 3rem;
      margin-left: 1.813rem;
    }
    .heading {
      text-transform: uppercase;
      width: 25.875rem;
      font-size: 32px;
      line-height: 2.5rem;
      letter-spacing: 0.208rem;
      margin-left: 1.813rem;
      margin-top: 1rem;
    }
    .date {
      margin-left: 1.813rem;
      margin-top: 0rem;
      font-size: 13px;
      line-height: 17px;
      color: white;
      position: absolute;
      opacity: 0.75;
    }
    .author {
      font-size: 13px;
      line-height: 17px;
      margin-top: 1rem;
      margin-left: 9rem;
      font-style: normal;
      color: white;
    }
    .para {
      width: 25.875rem;
      height: 9.375rem;
      font-size: 15px;
      line-height: 25px;
      margin-left: 1.813rem;
      opacity: 0.6;
    }
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-left: 1.813rem;
      padding-bottom: 3rem;
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
      margin-top: 0.5rem;
      position: absolute;
      margin-left: 3rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 387px;
    height: 406px;

    margin-left: 39px;
    margin-top: 0px;
    color: #ffffff;
    .first-line {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 2px;
      color: #ffffff;
      margin-top: 0rem;
    }
    .heading {
      text-transform: uppercase;
      width: 90%;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.16667px;
      margin-top: 1rem;
    }
    .date {
      margin-top: 0rem;
      font-size: 13px;
      line-height: 17px;
      color: white;
      position: absolute;
      opacity: 0.75;
    }
    .author {
      font-size: 13px;
      line-height: 17px;
      margin-top: 0rem;
      margin-left: 7rem;
      font-style: normal;
      color: white;
    }
    .para {
      width: 25.875rem;
      height: 6.375rem;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.6;
    }
    .link {
      text-decoration: none;
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
      margin-top: 0.5rem;
      position: absolute;
      margin-left: 3rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 387px;
    height: 406px;

    margin-left: 112px;
    margin-top: 0px;
    color: #ffffff;
    .first-line {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 2px;
      color: #ffffff;
      margin-top: 0rem;
    }
    .heading {
      text-transform: uppercase;
      width: 90%;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.16667px;
      margin-top: 1rem;
    }
    .date {
      margin-top: 0rem;
      font-size: 13px;
      line-height: 17px;
      color: white;
      position: absolute;
      opacity: 0.75;
    }
    .author {
      font-size: 13px;
      line-height: 17px;
      margin-top: 0rem;
      margin-left: 7rem;
      font-style: normal;
      color: white;
    }
    .para {
      width: 25.875rem;
      height: 6.375rem;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.6;
    }
    .link {
      text-decoration: none;
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
      margin-top: 0.5rem;
      position: absolute;
      margin-left: 3rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
`;

const MiddleSection = () => {
  return (
    <SectionContainer>
      <p className="first-line">Last Month's Featured Story</p>
      <h1 className="heading">Hazy Full Moon of appalachia</h1>
      <div>
        <p className="date">March 2nd 2020</p>
        <p className="author">by John Appleseed</p>
      </div>
      <p className="para">
        The dissected plateau area, while not actually made up of geological mountains, is popularly
        called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges
        are not high, the terrain is extremely rugged.
      </p>
      <a href="/" className="link">
        Read the Story{' '}
        <span>
          <img className="arrow-image" src={arrow} alt=""></img>
        </span>
      </a>
    </SectionContainer>
  );
};

export default MiddleSection;
