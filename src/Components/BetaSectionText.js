import GetAnInvite from './GetAnInviteLink';
import styled from 'styled-components';

const TextSection = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 18rem;
  border: 1px solid transparent;
  .pink-rectangle {
    width: 128px;
    height: 6px;
    left: 33px;
    position: absolute;
    background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
  }
  .heading {
    color: #ffffff;
    font-size: 32px;
    width: 19.375rem;
    line-height: 2.5rem;
    letter-spacing: 0.208rem;
    text-transform: uppercase;
    margin-top: 4rem;
    margin-left: 2.0625rem;
  }
  .link {
    margin-left: 2.2rem;
  }

  @media only screen and (min-width: 421px) {
    height: 17.5rem;
    margin-top: 6.6875rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .pink-rectangle {
      width: 6px;
      height: 280px;
      left: 0px;
    }
    .heading {
      align-self: center;
    }
    .link {
      margin-right: 5rem;
      align-self: center;
      height: 1rem;
    }
    .arrow-image {
      margin-top: 0.3rem;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 280px;
    .heading {
      font-size: 40px;
      width: 400px;
      line-height: 48px;
      letter-spacing: 4.16667px;
      margin-left: 38px;
    }
    .link {
      font-size: 12px;
      margin-right: 6rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 280px;
    .heading {
      margin-left: 165px;
    }
    .link {
      width: 300px;
    }
  }
`;
const BetaText = () => {
  return (
    <TextSection>
      <div className="pink-rectangle"></div>
      <h1 className="heading">We're in beta. Get your invite today!</h1>
      <div className="link">
        <GetAnInvite />
      </div>
    </TextSection>
  );
};

export default BetaText;
