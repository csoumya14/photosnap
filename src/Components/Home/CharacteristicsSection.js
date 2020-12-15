import React from 'react';
import styled from 'styled-components';
import responsive from '../assets/features/desktop/responsive.svg';
import photoUploadLimit from '../assets/features/desktop/no-limit.svg';
import embed from '../assets/features/desktop/embed.svg';

const CharContainer = styled.section`
  @media only screen and (max-width: 420px) {
    margin-top: 5rem;
  }
`;

const ResponsiveDiv = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .heading {
      margin-top: 3rem;
      font-size: 18px;
      line-height: 25px;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 19.375rem;
      margin-top: 0px;
    }
  }
`;
const UploadLimitDiv = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.5rem;
    .heading {
      margin-top: 3rem;
      font-size: 18px;
      line-height: 25px;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 19.375rem;
      margin-top: 0px;
    }
  }
`;

const EmbedDiv = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.5rem;
    .heading {
      margin-top: 3rem;
      font-size: 18px;
      line-height: 25px;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 19.375rem;
      margin-top: 0px;
    }
  }
`;

const CharSection = () => {
  return (
    <CharContainer>
      <ResponsiveDiv>
        <img src={responsive} alt="" />
        <h4 className="heading">100% Responsive</h4>
        <p className="para">
          No matter which the device you're on, our site is fully responsive and stories look
          beautiful on any screen
        </p>
      </ResponsiveDiv>
      <UploadLimitDiv>
        <img src={photoUploadLimit} alt="" />
        <h4 className="heading">No Photo Upload Limit</h4>
        <p className="para">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of
          your stories in one go.
        </p>
      </UploadLimitDiv>
      <EmbedDiv>
        <img src={embed} alt="" />
        <h4 className="heading">Available to Embed</h4>
        <p className="para">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and
          more.
        </p>
      </EmbedDiv>
    </CharContainer>
  );
};

export default CharSection;
