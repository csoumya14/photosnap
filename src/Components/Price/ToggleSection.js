import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
  }
`;
const ToggleSwitch = styled.div`
  position: relative;
  margin-left: 60px;
  margin-right: 60px;
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
    background: red;
    &:before,
    &:after {
      display: block;
      float: left;
      width: 50%;
      height: 34px;
      background: cyan;
      padding: 0;
      line-height: 34px;
      font-size: 14px;
      color: white;
      font-weight: bold;
      box-sizing: border-box;
    }
    &:before {
      content: '';

      background-color: #f90;
    }
  }
  .toggle-switch-inner:after {
    content: '';
    background-color: #bbb;

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
      transform: translate(calc(3.7em - 100%), -50%);
    }
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

const PriceCardContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
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
            <article key={info.id}>
              <h3>{info.title}</h3>
              <p>{info.text}</p>
              <div>
                <span>{info.dollarSign}</span>
                <span>{info.monthlyRate}</span>
              </div>
              <p className="text">{info.planMonth}</p>
              <button>{info.buttonText}</button>
            </article>
          );
        })}
      </PriceCardContainer>
    </SectionContainer>
  );
};

export default ToggleSwitchSection;
/*
{cardInfo.map((info) => {
          return (
            <article key={info.id}>
              <h3>{info.title}</h3>
              <p>{info.text}</p>
              <div>
                <span>{info.dollarSign}</span>
                <span>{info.monthlyRate}</span>
              </div>
              <p className="text">{info.planMonth}</p>
              <button>{info.buttonText}</button>
            </article>
          );
        })}
        */
