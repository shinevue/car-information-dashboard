import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import _ from 'lodash';

const LeaseType = props => {
  const typeArray = [];
  props.items.forEach(item => {
    typeArray.push(item.lease_type);
  });
  const count = _.countBy(typeArray);
  const chartData = Object.entries(count);
  chartData.unshift(['Type', 'Count']);

  return (
    <React.Fragment>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType='PieChart'
        data={chartData}
      />
    </React.Fragment>
  );
};

LeaseType.propTypes = {
  items: PropTypes.array
};

export default LeaseType;
