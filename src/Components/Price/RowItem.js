import React from 'react';
import check from '../assets/pricing/desktop/check.svg';
import styled from 'styled-components';

const Row = styled.tr`
  text-transform: uppercase;
  .item-label {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    font-weight: 700;
    padding-left: 24px;
  }
  td {
    border-bottom: 1px solid #dfdfdf;
  }
`;

const RowItems = ({ label, basic, pro, business }) => {
  return (
    <Row>
      <td className="item-label">{label}</td>
      {basic ? (
        <td className="item-basic">
          <img src={check} alt="" />
        </td>
      ) : (
        <td></td>
      )}
      {pro ? (
        <td className="item-pro">
          <img src={check} alt="" />
        </td>
      ) : (
        <td></td>
      )}
      {business ? (
        <td className="item-business">
          <img src={check} alt="" />
        </td>
      ) : (
        <td></td>
      )}
    </Row>
  );
};

export default RowItems;
