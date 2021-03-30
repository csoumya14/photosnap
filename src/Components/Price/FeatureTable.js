import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TableData from '../../data/TableData';
import { useViewPort } from '../CustomViewPort';
import BigScreenTableSection from './BigScreenTable';
import SmallScreenTableSection from './SmallScreenTable';

const TableContainer = styled.section`
  @media only screen and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    margin-top: 64px;
    .container-heading {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 100vw;
    max-width: 100%;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-heading {
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.16667px;
    }
  }
`;

const TableSection = () => {
  const [isSmallScreen] = useViewPort();
  const [tableData, setTableData] = useState([]);

  useEffect(() => setTableData(TableData), []);
  return (
    <TableContainer>
      <div className="container-heading">
        <h1>Compare</h1>
      </div>
      {isSmallScreen ? (
        <SmallScreenTableSection tableData={tableData} />
      ) : (
        <BigScreenTableSection />
      )}
    </TableContainer>
  );
};
export default TableSection;
