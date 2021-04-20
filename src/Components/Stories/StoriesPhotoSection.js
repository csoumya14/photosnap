import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/shared/desktop/arrow.svg';
import { useViewPort } from '../CustomViewPort';

const PhotoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0rem;
  max-width: 100%;

  .image-link {
    text-decoration: none;
    height: 375px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-top: 40.5rem;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: 4000px;
    width: 100vw;
    max-width: 100%;
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
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: 4000px;
    width: 100vw;
    max-width: 100%;
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
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    height: 2000px;

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
  margin-top: 215px;
  color: #fff;
  .date {
    margin-top: 0rem;
    margin-left: 2.063rem;
  }

  .caption {
    margin-top: 0rem;
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-left: 2.063rem;
  }

  .author {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    margin-top: 0rem;
    margin-left: 2.163rem;
  }

  .line {
    height: 1px;
    width: 19.375rem;
    background: #fff;
    margin-left: 2.063rem;
    margin-top: 0rem;
    opacity: 0.75;
  }

  .link {
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
    margin-left: 11.063rem;
    height: 0.75rem;
    filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  }

  @media only screen and (min-width: 421px) {
    .date {
      margin-top: 18.438rem;
      margin-left: 3.063rem;
    }
    .caption {
      margin-top: 0.25rem;
      margin-left: 3.063rem;
    }
    .author {
      margin-top: 0.25rem;
      margin-left: 3.163rem;
    }
    .line {
      width: 70%;
      margin-left: 3.063rem;
    }
    .link {
      margin-top: 1rem;
      margin-left: 3.2rem;
    }
    .arrow-image {
      margin-left: 9%;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-left: 0px;
    border: 1px solid transparent;
    width: 100vw;
    height: 23.43rem;
    margin-top: 0px;
    color: #fff;
    .date {
      margin-top: 20rem;
      font-size: 13px;
      line-height: 16.93px;
      margin-left: 42.67px;
    }
    .caption {
      line-height: 1.563rem;
      margin-left: 42.67px;
    }

    .author {
      line-height: 16.93px;
      margin-top: 0.25rem;
      margin-left: 42.67px;
    }
    .line {
      width: 298.67px;
      margin-left: 42.67px;
    }

    .link {
      margin-top: 1rem;
      margin-left: 42.67px;
    }
    .arrow-image {
      margin-left: 9.063rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 0px;
    border: 1px solid transparent;
    padding-top: 21rem;
    color: #fff;

    .date {
      margin-top: 0rem;
    }
    .line {
      width: 20%;
      margin-left: 42.67px;
    }
    .arrow-image {
      margin-left: 9%;
    }
  }
`;
const ImageItem = styled.img`
  width: 100vw;
  height: 375px;
  position: absolute;
  z-index: -1;
  filter: brightness(70%);
  object-fit: cover;

  @media only screen and (min-width: 421px) {
    width: 100%;
    height: 500px;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1024px) {
    filter: brightness(100%);
  }
`;

const PhotoSection = ({ image }) => {
  const [isSmallScreen] = useViewPort();
  return (
    <PhotoContainer>
      {image.map(img => {
        return (
          <a href="#/" key={img.id} className="image-link">
            {isSmallScreen ? (
              <ImageItem src={img.mobileImage} alt="" />
            ) : (
              <ImageItem src={img.desktopImage} alt="" />
            )}
            <Figure>
              <p className="date">{img.date}</p>
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
          </a>
        );
      })}
    </PhotoContainer>
  );
};

export default PhotoSection;

/*
--transition: 300ms ease-in-out;


 .image-link:hover {
      -moz-transform: translate(-2px, -2px);
      -ms-transform: translate(-2px, -2px);
      -o-transform: translate(-2px, -2px);
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
*/
