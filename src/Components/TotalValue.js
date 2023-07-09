import React from 'react';
import PropTypes from 'prop-types';

const TotalValue = props => {
  const valuesOfLeases = props.items.map(row => {
      if(Date.parse(row.end_date) > Date.now()) {
        return parseInt(row.net_lease_price);
      } else {
          return 0; 
      }
  });
  const totalValue = valuesOfLeases.reduce((a, b) => a + b, 0);

  return <React.Fragment>{totalValue}</React.Fragment>;
};

TotalValue.propTypes = {
    items: PropTypes.array
};

export default TotalValue;
