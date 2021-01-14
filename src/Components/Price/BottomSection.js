import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/shared/desktop/logo.svg';
import facebookLogo from '../assets/shared/desktop/facebook.svg';
import youtubeLogo from '../assets/shared/desktop/youtube.svg';
import twitterLogo from '../assets/shared/desktop/twitter.svg';
import pinterestLogo from '../assets/shared/desktop/pinterest.svg';
import instaLogo from '../assets/shared/desktop/instagram.svg';
import arrow from '../assets/shared/desktop/arrow.svg';

const BottomContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 33.688rem;
    margin-top: -0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000000;
    .invite-link {
      margin-top: 7.438rem;
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      align-self: flex-start;
      margin-left: 6.375rem;
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
      margin-left: 1.375rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
    .copyrightInfo {
      color: #fff;
      font-size: 15px;
      width: 15.938rem;
      opacity: 50.25%;
      margin-top: 2.125rem;
      margin-bottom: 3.5rem;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 33.688rem;
    margin-top: -0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000000;

    .invite-link {
      margin-top: 7.438rem;
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      align-self: flex-start;
      margin-left: 11.375rem;
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
      margin-left: 1.375rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
    .copyrightInfo {
      color: #fff;
      font-size: 15px;
      width: 15.938rem;
      opacity: 50.25%;
      margin-top: 2.125rem;
      margin-bottom: 3.5rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    width: 100vw;
    height: 284px;
    margin-top: 0rem;
    background: #000000;
    color: #ffffff;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 1.5fr 1fr;
    .invite-link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      margin-top: 64px;
      margin-left: 6.375rem;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.1rem;
      position: absolute;
      margin-left: 1.375rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
    .copyrightInfo {
      color: #fff;
      font-size: 15px;
      width: 15.938rem;
      opacity: 50.25%;
      margin-top: 3.125rem;
      margin-bottom: 3.5rem;
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    width: 100vw;
    height: 250px;
    margin-top: 0rem;
    background: #000000;
    grid-template-columns: 1fr 2fr 1.9fr;
    grid-template-rows: 1fr 1fr;
    .invite-link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      align-self: flex-start;
      justify-self: center;
      margin-left: 0rem;
      margin-top: 64px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.1rem;
      position: absolute;
      margin-left: 1.375rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
    .copyrightInfo {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 3;
      grid-column-end: 4;
      margin-top: -10px;
      justify-self: flex-start;
      margin-left: 5rem;
      color: #fff;
      font-size: 15px;
      width: 15.938rem;
      opacity: 50.25%;
    }
  }
`;
const LogoImg = styled.img`
  @media only screen and (max-width: 420px) {
    filter: invert(1);
    object-fit: cover;
    margin-top: 3.5rem;
    width: 10.625rem;
    height: 1 rem;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    filter: invert(1);
    object-fit: cover;
    margin-top: 3.5rem;
    width: 10.625rem;
    height: 1 rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    filter: invert(1);
    object-fit: cover;
    margin-top: 3.5rem;
    width: 10.625rem;
    height: 1 rem;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: 4rem;
    margin-left: 39px;
    width: 170px;
  }
  @media only screen and (min-width: 1024px) {
    filter: invert(1);
    object-fit: cover;
    margin-top: 3.5rem;
    width: 10.625rem;
    height: 1 rem;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: 4rem;
    align-self: start;
    justify-self: end;
    width: 170px;
  }
`;

const SocialIconContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 9.625rem;
    height: 1.25rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo-image {
      filter: sepia(100%) grayscale(100%) brightness(20);
    }
    .logo-image:hover {
      filter: none;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 9.625rem;
    height: 1.25rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo-image {
      filter: sepia(100%) grayscale(100%) brightness(20);
    }
    .logo-image:hover {
      filter: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 9.625rem;
    height: 1.25rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo-image {
      filter: sepia(100%) grayscale(100%) brightness(20);
    }
    .logo-image:hover {
      filter: none;
    }
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-bottom: 65px;
    margin-left: 39px;
  }
  @media only screen and (min-width: 1024px) {
    width: 9.625rem;
    height: 1.25rem;
    margin-top: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .logo-image {
      filter: sepia(100%) grayscale(100%) brightness(20);
    }
    .logo-image:hover {
      filter: none;
    }
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: -20px;
    align-self: start;
    justify-self: end;
  }
`;

const LinkContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 19.375rem;
    height: 7.563rem;
    margin-top: 3.063rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
        opacity: 0.3;
      }
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 19.375rem;
    height: 7.563rem;
    margin-top: 3.063rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
        opacity: 0.3;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: row;
    width: 315px;
    height: 0px;
    margin-left: 39px;
    margin-top: 4.063rem;
    padding: 0px;
    align-items: center;
    justify-content: space-between;
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      height: 4rem;
      &:hover,
      &:focus {
        text-decoration: underline;
        opacity: 0.3;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    width: 19.375rem;
    height: 7.563rem;
    margin-top: 4rem;
    align-items: center;
    justify-content: space-between;
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      line-height: 15.62px;
      letter-spacing: 2px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
        opacity: 0.3;
      }
    }
  }
`;
const BottomSection = () => {
  return (
    <BottomContainer>
      <LogoImg src={logo} alt="" />
      <SocialIconContainer>
        <a href="/#">
          <img className="logo-image" src={facebookLogo} alt="facebook logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={youtubeLogo} alt="youtube logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={twitterLogo} alt="twitter logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={pinterestLogo} alt="pinterest logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={instaLogo} alt="instagram logo" />{' '}
        </a>
      </SocialIconContainer>
      <LinkContainer>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/stories">
          Stories
        </Link>
        <Link className="link" to="/features">
          Features
        </Link>
        <Link className="link" to="/pricing">
          Pricing
        </Link>
      </LinkContainer>
      <a href="/#" className="invite-link">
        Get an invite{' '}
        <span>
          <img className="arrow-image" src={arrow} alt=""></img>
        </span>
      </a>
      <p className="copyrightInfo">Copyright 2019. All Rights Reserved</p>
    </BottomContainer>
  );
};

export default BottomSection;
