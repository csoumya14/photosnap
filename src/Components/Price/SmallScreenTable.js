import React from 'react';
import styled from 'styled-components';

import check from '../../assets/pricing/desktop/check.svg';

const TableSection = styled.section`
  width: 90%;
  height: 952px;
  margin-left: 29px;

  .table-heading {
    margin-top: 0rem;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .line {
    border-bottom: 1px solid #000000;
    margin-top: 23px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-left: 100px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  .row-heading {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    padding-top: 23px;
  }
  .heading-row {
    text-align: left;
  }
  .column-heading {
    font-weight: 700;
    padding-top: 16px;

    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.66667px;
    color: #000000;
    opacity: 0.5;
  }
  .check-line td {
    padding-bottom: 24.5px;
    border-bottom: 1px solid #dfdfdf;
  }
`;

const SmallScreenTableSection = ({ tableData }) => {
  return (
    <TableSection>
      <h5 className="table-heading">The features</h5>
      <div className="line"></div>
      {tableData.map(info => {
        return (
          <Table key={info.id}>
            <colgroup span="3"></colgroup>
            <thead className="first-header">
              <tr>
                <th colSpan="3" scope="colgroup" className="row-heading">
                  {info.name}
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="heading-row">
                <th scope="col" className="column-heading basic">
                  Basic
                </th>
                <th scope="col" className="column-heading">
                  Pro
                </th>
                <th scope="col" className="column-heading">
                  Business
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="check-line">
                <td>{info.basic ? <img src={check} alt="" /> : ''}</td>
                <td>{info.pro ? <img src={check} alt="" /> : ''}</td>
                <td>{info.business ? <img src={check} alt="" /> : ''}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </TableSection>
  );
};
export default SmallScreenTableSection;
