import React from 'react';
import PropTypes from 'prop-types';

const AveLeaseRate = props => {
  const aveRateArray = [];
  props.items.forEach(item => {
    if (Date.parse(item.end_date) > Date.now()) {
      aveRateArray.push(parseFloat(item.lease_rate_annual));
    }
  });

  const aveRateReduced = aveRateArray.reduce((a, b) => (a + b) / 2, 0);
  return <React.Fragment>{aveRateReduced.toFixed(5)}</React.Fragment>;
};

AveLeaseRate.propTypes = {
  items: PropTypes.array
};

export default AveLeaseRate;
