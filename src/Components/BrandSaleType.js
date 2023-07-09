import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import _ from 'lodash';

const BrandSaleType = props => {
  const brandArray = [];
  props.items.forEach(item => {
    brandArray.push(item.make);
  });
  const count = _.countBy(brandArray);
  const chartData = Object.entries(count);
  chartData.unshift(['Make', 'Count']);

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

BrandSaleType.propTypes = {
  items: PropTypes.array
};

export default BrandSaleType;
