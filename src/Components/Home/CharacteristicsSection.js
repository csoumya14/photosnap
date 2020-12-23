import React from 'react';
import styled from 'styled-components';

const CharContainer = styled.section`
  @media only screen and (max-width: 420px) {
    margin-top: 5rem;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-top: 5rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 120px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    margin-top: 120px;
  }
`;

const Figure = styled.figure`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 56px;
    .caption {
      margin-top: 3rem;
      font-size: 18px;
      line-height: 25px;
    }
    .text {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 19.375rem;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 56px;
    .caption {
      margin-top: 3rem;
      font-size: 18px;
      line-height: 25px;
    }
    .text {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 19.375rem;
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    .caption {
      margin-top: 48px;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
    }
    .text {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 457px;
      margin-top: 16px;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .caption {
      margin-top: 48px;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
    }
    .text {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 457px;
      margin-top: 16px;
    }
  }
`;

const CharSection = ({ feature }) => {
  return (
    <CharContainer>
      {feature.slice(0, 3).map((ftr) => {
        return (
          <Figure key={ftr.id}>
            <img src={ftr.featureImage} alt="" />
            <figcaption className="caption">{ftr.featureTitle}</figcaption>
            <p className="text">{ftr.featureText}</p>
          </Figure>
        );
      })}
    </CharContainer>
  );
};

export default CharSection;
