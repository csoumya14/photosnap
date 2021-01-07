import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';
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
  .link {
    position: absolute;
    margin-top: -5rem;
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
    position: absolute;
    margin-left: 11.063rem;
    height: 0.75rem;
    filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .image-link {
      height: 500px;
    }
    .link {
      margin-top: 0rem;
    }

    .arrow-image {
      margin-left: 20.063rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    width: 100vw;
    height: 1000px;

    .link {
      position: absolute;
      margin-top: 50px;
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
    .image-link {
      position: relative;
      display: block;
      height: 500px;
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.1rem;
      position: absolute;
      margin-left: 160px;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    width: 100vw;
    height: 500px;
    .link {
      position: absolute;
      margin-top: 25px;
      text-decoration: none;
      color: #fff;
      color: red;
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
    .image-link {
      position: relative;
      display: block;
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.1rem;
      position: absolute;
      margin-left: 160px;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
`;

const Figure = styled.figure`
  margin-left: 0px;
  width: 100vw;
  height: 23.43rem;
  margin-top: 0px;
  color: #fff;
  .caption {
    margin-top: 236px;
    font-size: 18px;
    line-height: 1.563rem;
    font-weight: 700;
    margin-left: 2.063rem;
    position: absolute;
  }
  .author {
    font-weight: 400;
    font-size: 13px;
    line-height: 16.93px;
    margin-top: 265px;
    margin-left: 2.163rem;
    position: absolute;
  }

  .line {
    height: 1px;
    width: 19.375rem;
    background: #fff;
    margin-left: 2.063rem;
    opacity: 0.75;
    margin-top: 290px;
    position: absolute;
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .caption {
      margin-top: 310px;
    }
    .author {
      margin-top: 340px;
    }
    .line {
      margin-top: 370px;
      width: 28.375rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0px;
    margin-top: 0px;
    color: #ffffff;
    .caption {
      margin-top: 361px;

      font-size: 18px;
      line-height: 1.563rem;
      font-weight: 700;
      margin-left: 2.063rem;
      position: absolute;
    }
    .author {
      font-weight: 400;
      font-size: 13px;
      line-height: 16.93px;
      margin-top: 390px;
      position: absolute;
      margin-left: 2.163rem;
    }
    .line {
      height: 1px;
      width: 302.56px;
      background: #fff;
      margin-left: 2.063rem;
      opacity: 0.75;
      position: absolute;
      margin-top: 420px;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 0px;
    margin-top: 0px;
    color: #ffffff;
    .caption {
      margin-top: 361px;
      font-size: 18px;
      line-height: 1.563rem;
      font-weight: 700;
      margin-left: 2.063rem;
      position: absolute;
    }
    .author {
      font-weight: 400;
      font-size: 13px;
      line-height: 16.93px;
      margin-top: 390px;
      position: absolute;
      margin-left: 2.163rem;
    }
    .line {
      height: 1px;
      width: 302.56px;
      background: #fff;
      margin-left: 2.063rem;
      opacity: 0.75;
      position: absolute;
      margin-top: 420px;
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
    width: 100vw;
    height: 500px;
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
      {image.slice(0, 4).map((img) => {
        return (
          <a href="#/" className="image-link" key={img.id}>
            {isSmallScreen ? (
              <Figure>
                <ImageItem src={img.mobileImage} alt="" />
                <figcaption className="caption">{img.caption}</figcaption>
                <p className="author">{img.author}</p>
                <div className="line"></div>
              </Figure>
            ) : (
              <Figure>
                <ImageItem src={img.desktopImage} alt="" />
                <figcaption className="caption">{img.caption}</figcaption>
                <p className="author">{img.author}</p>
                <div className="line"></div>
              </Figure>
            )}
            <p className="link">
              Read Story{' '}
              <span>
                {' '}
                <img className="arrow-image" src={arrow} alt=""></img>
              </span>
            </p>
          </a>
        );
      })}
    </PhotoContainer>
  );
};

export default PhotoSection;

/*
const FigureContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 23.43rem;
    .image-link {
      text-decoration: none;
    }
    .link {
      position: absolute;
      margin-top: -5rem;
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
      position: absolute;
      margin-left: 11.063rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 30.43rem;
    .image-link {
      text-decoration: none;
    }
    .link {
      position: absolute;
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
      width: 2.63rem;
      margin-top: 0.1rem;
      position: absolute;
      margin-left: 20.063rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid red;
    .link {
      display: none;
      position: absolute;
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
    .image-link {
      width: 100%;
      position: relative;
      display: block;
      border: 5px solid green;
    }
  }
`;
*/
