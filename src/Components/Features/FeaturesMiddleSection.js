import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Figure = styled.figure`
  height: 14.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;
  .caption {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    margin-top: 3rem;
  }
  .text {
    font-size: 15px;
    line-height: 25px;
    opacity: 0.6;
    text-align: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 340px;
    height: 236px;
  }
`;
const FigureContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 20.375rem;
    height: 104.688rem;
    margin-top: 4rem;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 20.375rem;
    height: 104.688rem;
    margin-top: 4rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    display: grid;
    margin-top: 112px;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    justify-items: center;
    ${Figure}:nth-child(2) {
      margin-top: 3rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    display: grid;
    margin-top: 112px;

    grid-template-columns: repeat(3, 33%);
    align-items: center;
    justify-items: center;
    ${Figure}:nth-child(2) {
      margin-top: 3rem;
    }
  }
`;

const ImageItem = styled.img``;

const MiddleSection = ({ feature }) => {
  return (
    <SectionContainer>
      <FigureContainer>
        {feature.map((ftr) => {
          return (
            <Figure key={ftr.id}>
              <ImageItem src={ftr.featureImage} alt="" />
              <figcaption className="caption">{ftr.featureTitle}</figcaption>
              <p className="text">{ftr.featureText}</p>
            </Figure>
          );
        })}
      </FigureContainer>
    </SectionContainer>
  );
};

export default MiddleSection;
