import React from 'react';

const RowItems = ({ label, basic, pro, business }) => {
  return (
    <tr>
      <td className="item-label">{label}</td>
      {basic ? <td className="item-basic">&#10004;</td> : <td></td>}
      {pro ? <td className="item-pro">&#10004;</td> : <td></td>}
      {business ? <td className="item-business">&#10004;</td> : <td></td>}
    </tr>
  );
};

export default RowItems;
