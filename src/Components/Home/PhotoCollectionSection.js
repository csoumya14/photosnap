import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';

const PhotoContainer = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
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
`;
const Figure = styled.figure`
  @media only screen and (max-width: 420px) {
    margin-left: 0px;
    border: 1px solid transparent;
    width: 100vw;
    height: 23.43rem;
    margin-top: 0px;
    color: #fff;
    .caption {
      margin-top: 14.75rem;
      font-size: 18px;
      line-height: 1.563rem;
      font-weight: 700;
      margin-left: 2.063rem;
    }
    .author {
      font-weight: 400;
      font-size: 13px;
      line-height: 16.93px;
      margin-top: 0rem;
      margin-left: 2.163rem;
    }
    .line {
      height: 1px;
      width: 19.375rem;
      background: #fff;
      margin-left: 2.063rem;
      opacity: 0.75;
      position: absolute;
    }
  }
`;
const ImageItem = styled.img`
  @media only screen and (max-width: 420px) {
    position: absolute;
    z-index: -1;
    object-fit: contain;
    filter: brightness(70%);
  }
`;

const PhotoSection = ({ image }) => {
  return (
    <PhotoContainer>
      {image.slice(0, 4).map((img) => {
        return (
          <FigureContainer key={img.id}>
            <a href="#/" className="image-link">
              <Figure>
                <ImageItem src={img.mobileImage} alt="" />
                <figcaption className="caption">{img.caption}</figcaption>
                <p className="author">{img.author}</p>
                <div className="line"></div>
              </Figure>
            </a>
            <p className="link">
              Read Story{' '}
              <span>
                {' '}
                <img className="arrow-image" src={arrow} alt=""></img>
              </span>
            </p>
          </FigureContainer>
        );
      })}
    </PhotoContainer>
  );
};

export default PhotoSection;
