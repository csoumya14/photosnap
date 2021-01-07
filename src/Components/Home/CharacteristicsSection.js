import React from 'react';
import styled from 'styled-components';

const CharContainer = styled.section`
  width: 100vw;
  max-width: 100%;
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
    height: 476px;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
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
      font-weight: 700;
    }
    .text {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 19.375rem;
      margin-top: 16px;
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
      font-weight: 700;
    }
    .text {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 19.375rem;
      margin-top: 16px;
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
      width: 350px;
      margin-top: 16px;
    }
  }
`;

const FigureContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 310px;

    margin-left: 33px;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${Figure}:nth-child(2) {
      margin-top: 3rem;
    }
  }
`;

const CharSection = ({ feature }) => {
  return (
    <CharContainer>
      <FigureContainer>
        {feature.slice(0, 3).map((ftr) => {
          return (
            <Figure key={ftr.id}>
              <img src={ftr.featureImage} alt="" />
              <figcaption className="caption">{ftr.featureTitle}</figcaption>
              <p className="text">{ftr.featureText}</p>
            </Figure>
          );
        })}
      </FigureContainer>
    </CharContainer>
  );
};

export default CharSection;
