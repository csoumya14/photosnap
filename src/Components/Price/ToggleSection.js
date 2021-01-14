import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 0.8fr;
    gap: 0px 0px;
    grid-template-areas:
      '.'
      '.';
  }
  @media only screen and (min-width: 767px) and (max-width: 1023px) {
    width: 100vw;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.8fr;
    gap: 0px 0px;
    grid-template-areas:
      '.'
      '.';
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    gap: 0px 0px;
    justify-items: center;
    grid-template-areas:
      '.'
      '.';
  }
`;
const ToggleSwitch = styled.div`
  position: relative;

  margin-top: 65px;
  width: 255px;
  display: flex;
  flex-direction: row;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  .toggle-text {
  }
  .toggle-text-monthly {
  }

  .toggle-switch-checkbox {
    position: absolute;
    opacity: 0;
  }
  .toggle-switch-label {
    width: 64px;
    height: 32px;
    margin-left: 32px;
    margin-right: 32px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 20px;
    margin-top: 1rem;
  }
  .toggle-switch-inner {
    display: block;
    width: 200%;
    height: 24px;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;

    &:before,
    &:after {
      display: block;
      float: left;
      width: 50%;
      height: 34px;
      padding: 0;
      box-sizing: border-box;
    }
    &:before {
      content: '';
      background-color: #000;
    }
  }
  .toggle-switch-inner:after {
    content: '';
    background-color: #dfdfdf;
    text-align: right;
  }
  .toggle-switch-switch {
    width: 24px;
    height: 24px;
    margin: 10px;
    background: #000;
    position: absolute;
    top: 21px;
    bottom: 0;
    right: 115px;
    transform: translate(0, -50%);
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
  .toggle-switch-checkbox:checked + .toggle-switch-label {
    .toggle-switch-inner {
      margin-left: 0;
    }
    .toggle-switch-switch {
      background: #fff;
      transform: translate(calc(3.7em - 100%), -50%);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
  @media only screen and (min-width: 1024px) {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
`;

const ToggleTextMonthly = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  opacity: ${({ checked }) => (checked ? '0.5' : '1')};
`;
const ToggleTextYearly = styled(ToggleTextMonthly)`
  opacity: ${({ checked }) => (checked ? '1' : '0.5')};
`;

const Article = styled.article`
  @media only screen and (max-width: 420px) {
    width: 19.875rem;
    height: 26.438rem;
    text-align: center;
    background: #f5f5f5;
    margin-bottom: 1.5rem;
    .article-heading {
      font-size: 24px;
      line-height: 1.563rem;
      margin-top: 3.5rem;
    }
    .article-para {
      width: 275px;
      font-size: 15px;
      line-height: 25px;
      margin-left: 1.313rem;
      opacity: 0.6;
    }
    .rate {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 0.26rem;
      margin-top: 2.5rem;
    }
    .article-plan {
      font-size: 15px;
      line-height: 25px;
      font-weight: 400;
      letter-spacing: 0rem;
      margin-top: 0rem;
      opacity: 0.6;
    }
    .article-button {
      width: 15.313rem;
      height: 2.5rem;
      margin-top: 2.188rem;
      background: #000000;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      border: none;
      &:hover {
        background: #dfdfdf;
      }
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 25.875rem;
    height: 25.438rem;
    text-align: center;
    background: #f5f5f5;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .article-heading {
      font-size: 24px;
      line-height: 1.563rem;
      margin-top: 3.5rem;
    }
    .article-para {
      width: 275px;
      font-size: 15px;
      line-height: 25px;

      opacity: 0.6;
    }
    .rate {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 0.26rem;
    }
    .article-plan {
      font-size: 15px;
      line-height: 25px;
      font-weight: 400;
      letter-spacing: 0rem;
      margin-top: 0rem;
      opacity: 0.6;
    }
    .article-button {
      width: 15.313rem;
      height: 2.5rem;

      background: #000000;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      border: none;
      &:hover {
        background: #dfdfdf;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 43.063rem;
    height: 16.875rem;
    background: #f5f5f5;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    .article-heading {
      font-size: 24px;
      line-height: 0.5rem;
      margin-top: 3.5rem;
      margin-left: 2.5rem;
    }
    .article-para {
      width: 275px;
      font-size: 15px;
      line-height: 25px;
      margin-left: 2.5rem;
      opacity: 0.6;
    }
    .rate {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 0.26rem;
      margin-top: 2.5rem;
      align-self: flex-end;
      position: absolute;
      margin-right: 56px;
    }
    .article-plan {
      font-size: 15px;
      line-height: 25px;
      font-weight: 400;
      letter-spacing: 0rem;
      margin-top: 0rem;
      opacity: 0.6;
      text-align: right;
    }
    .article-button {
      width: 16.875rem;
      height: 2.5rem;
      margin-top: 0rem;
      margin-left: 2.5rem;
      background: #000000;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      border: none;
      &:hover {
        background: #dfdfdf;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 350px;
    height: 407px;
    background: #f5f5f5;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .article-heading {
      font-size: 24px;
      line-height: 0.5rem;
      margin-top: 3.5rem;
      margin-left: 2.5rem;
    }
    .article-para {
      width: 275px;
      font-size: 15px;
      text-align: center;
      line-height: 25px;
      margin-left: 2.5rem;
      opacity: 0.6;
    }
    .rate {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      letter-spacing: 4.16667px;
    }
    .article-plan {
      font-size: 15px;
      line-height: 25px;
      font-weight: 400;
      text-align: center;
      letter-spacing: 0rem;
      margin-top: 0rem;
      opacity: 0.6;
    }
    .article-button {
      width: 16.875rem;
      height: 2.5rem;
      margin-top: 0rem;

      background: #000000;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      border: none;
      &:hover {
        background: #dfdfdf;
      }
    }
  }
`;

const PriceCardContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Article}:nth-child(2) {
      background: #000000;
      color: #ffffff;
      .article-button {
        background: #ffffff;
        color: #000000;
        &:hover {
          background: #dfdfdf;
        }
      }
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Article}:nth-child(2) {
      background: #000000;
      color: #ffffff;
      .article-button {
        background: #ffffff;
        color: #000000;
        &:hover {
          background: #dfdfdf;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    max-width: 100%;
    grid-row: 2/3;
    grid-column: 1/2;

    display: flex;
    flex-direction: column;
    align-items: center;
    ${Article}:nth-child(2) {
      background: #000000;
      color: #ffffff;

      .article-button {
        background: #ffffff;
        color: #000000;
        &:hover {
          background: #dfdfdf;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-row: 2/3;
    grid-column: 1/2;
    align-self: center;
    justify-item: center;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    ${Article}:nth-child(2) {
      height: 470px;
      background: #000000;
      color: #ffffff;
      margin-left: 30px;
      margin-right: 30px;
      border-style: solid;
      border-width: 6px;
      border-image: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%) 100% 0 0/6px
        0 6px 0 stretch;
      .article-button {
        background: #ffffff;
        color: #000000;
        &:hover {
          background: #dfdfdf;
        }
      }
    }
  }
`;

const ToggleSwitchSection = ({ name, checked, onChange, cardInfo }) => {
  const handleKeyPress = (e) => {
    if (e.keyCode !== 32) {
      return;
    }
    e.preventDefault();
    onChange(!checked);
  };
  return (
    <SectionContainer>
      <ToggleSwitch>
        <ToggleTextMonthly checked={checked}>Monthly</ToggleTextMonthly>
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={name}
          id={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          title="toggle-switch"
        />
        <label
          htmlFor={name}
          className="toggle-switch-label"
          tabIndex="1"
          onKeyDown={(e) => handleKeyPress(e)}
        >
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
        <ToggleTextYearly checked={checked}>Yearly</ToggleTextYearly>
      </ToggleSwitch>
      <PriceCardContainer>
        {cardInfo.map((info) => {
          return (
            <Article key={info.id}>
              <h3 className="article-heading">{info.title}</h3>
              <p className="article-para">{info.text}</p>
              {!checked ? (
                <div className="rate">
                  <span>{'\u0024'}</span>
                  <span className="article-rate">{info.monthlyRate}</span>
                  <p className="article-plan">{info.planMonth}</p>
                </div>
              ) : (
                <div className="rate">
                  <span>{'\u0024'}</span>
                  <span className="article-rate">{info.yearlyRate}</span>
                  <p className="article-plan">{info.planYear}</p>
                </div>
              )}

              <button className="article-button">{info.buttonText}</button>
            </Article>
          );
        })}
      </PriceCardContainer>
    </SectionContainer>
  );
};

export default ToggleSwitchSection;
