import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/shared/desktop/arrow.svg';
import { Link } from 'react-router-dom';
import { useViewPort } from '../CustomViewPort';

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 100%;

  .image-link {
    text-decoration: none;
    height: 375px;
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    display: grid;
    height: 750px;

    grid-template-columns: repeat(2, 50%);
    .image-link {
      height: 375px;

      overflow: hidden;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    width: 100vw;
    height: 1000px;
    .image-link {
      text-decoration: none;
      position: relative;
      display: block;
      height: 500px;
    }
    .image-link::before {
      left: 0;
      width: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0;
      content: '';
      height: 0.6rem;
      position: absolute;
      transition: 300ms ease-in-out opacity, 300ms ease-in-out width;
      background-image: linear-gradient(27deg, #ffc593 0%, #bc7198 49%, #5a77ff 95%);
    }
    .image-link:hover::before {
      opacity: 1;
      width: 100%;
    }
    .image-link:hover {
      transform: translateY(-2.4rem);
    }
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    width: 100vw;
    height: 500px;
    .image-link {
      text-decoration: none;
      height: 500px;
      position: relative;
      transition: 300ms ease-in-out transform;
    }
    .image-link::before {
      left: 0;
      width: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0;
      content: '';
      height: 0.6rem;
      position: absolute;
      transition: 300ms ease-in-out opacity, 300ms ease-in-out width;
      background-image: linear-gradient(27deg, #ffc593 0%, #bc7198 49%, #5a77ff 95%);
    }
    .image-link:hover::before {
      opacity: 1;
      width: 100%;
    }
    .image-link:hover {
      transform: translateY(-2.4rem);
    }
  }
`;

const Figure = styled.div`
  margin-left: 0px;
  margin-top: 236px;
  color: #fff;
  .caption {
    margin-top: 0px;
    font-size: 18px;
    line-height: 1.563rem;
    font-weight: 700;
    margin-left: 2.063rem;
  }
  .author {
    font-weight: 400;
    font-size: 13px;
    line-height: 16.93px;
    margin-top: 4px;
    margin-left: 2.163rem;
  }

  .line {
    height: 1px;
    width: 19.375rem;
    background: #fff;
    margin-left: 2.063rem;
    opacity: 0.75;
    margin-top: 16px;
  }
  .link {
    position: absolute;
    margin-top: 20px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    margin-left: 2.06rem;
    line-height: 15.62px;
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
    position: relative;
    margin-left: 11.063rem;
    height: 0.75rem;
    filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    padding-top: 10px;

    .line {
      margin-top: 0px;
      width: 80%;
    }
    .arrow-image {
      margin-top: 0px;
      position: absolute;
      margin-left: 60px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 361px;

    color: #ffffff;
    .caption {
      font-size: 18px;
      line-height: 1.563rem;
      font-weight: 700;
      margin-left: 2.063rem;
    }
    .author {
      font-weight: 400;
      font-size: 13px;
      line-height: 16.93px;
      margin-left: 2.163rem;
    }
    .line {
      height: 1px;
      width: 302.56px;
      background: #fff;
      margin-left: 2.063rem;
      opacity: 0.75;
    }
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-left: 2.06rem;
      line-height: 15.62px;
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
      position: relative;
      margin-left: 160px;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 0px;
    margin-top: 22rem;
    color: #ffffff;
    .caption {
      margin-top: 0px;
      font-size: 18px;
      line-height: 1.563rem;
      font-weight: 700;
      margin-left: 2.063rem;
    }
    .author {
      font-weight: 400;
      font-size: 13px;
      line-height: 16.93px;
      margin-top: 0px;

      margin-left: 2.163rem;
    }
    .line {
      height: 1px;
      width: 80%;
      background: #fff;
      margin-left: 2.063rem;
      opacity: 0.75;
      margin-top: 0px;
    }
    .link {
      position: relative;
      margin-top: 1rem;
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-left: 2.06rem;
      line-height: 15.62px;
      letter-spacing: 2px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
    .arrow-image {
      margin-top: 0rem;
      position: relative;
      margin-left: 40%;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
`;
const ImageItem = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 375px;
    z-index: -5;
    position: absolute;
    object-fit: cover;
    filter: brightness(70%);
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    position: absolute;
    width: 50%;
    height: 375px;
    z-index: -1;

    object-fit: cover;

    filter: brightness(70%);
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    filter: brightness(70%);
  }
  @media only screen and (min-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 500px;
    z-index: -1;
    object-fit: cover;
  }
`;

const PhotoSection = ({ image }) => {
  const [isSmallScreen] = useViewPort();

  return (
    <PhotoContainer>
      {image.slice(0, 4).map(img => {
        return (
          <Link to="/stories" className="image-link" key={img.id}>
            {isSmallScreen ? (
              <ImageItem src={img.mobileImage} alt="" />
            ) : (
              <ImageItem src={img.desktopImage} alt="" />
            )}
            <Figure>
              <figcaption className="caption">{img.caption}</figcaption>
              <p className="author">{img.author}</p>
              <div className="line"></div>
              <p className="link">
                Read Story{' '}
                <span>
                  {' '}
                  <img className="arrow-image" src={arrow} alt=""></img>
                </span>
              </p>
            </Figure>
          </Link>
        );
      })}
    </PhotoContainer>
  );
};

export default PhotoSection;
