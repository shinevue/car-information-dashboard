import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const BarchartMonthly = props => {
  const [dropdownOpen, setOpen] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const toggle = () => setOpen(!dropdownOpen);

  const leaseMonths = props.items.map(item => {
    const datesLeases = new Date(item.start_date);
    return new Date(datesLeases.getFullYear(), datesLeases.getMonth());
  });

  const chartData = _.countBy(leaseMonths);
  const result = Object.keys(chartData).map(function(key) {
    const yearDate = new Date(key);
    const monthString = String(yearDate.getMonth() + 1);
    const yearString = String(yearDate.getFullYear());
    //const nameDate = parseInt(yearString + monthString.padStart(2, "0"));
    const nameString = yearString + '-' + monthString.padStart(2, '0');
    return {
      date: yearDate,
      labels: nameString,
      count: chartData[key]
    };
  });

  result.sort(function(a, b) {
    return a.date - b.date;
  });

  //const minYear = result.date.getFullYear();
  //console.log(minYear);

  const dateRangeData = result.filter((item) => {
    const dateItem = new Date(item.date);
    return (dateItem.getFullYear() >= year && dateItem.getFullYear() < year + 1)
  })


  return (
    <React.Fragment>
      <div>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Filter Data</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={e => setYear(2019)}>2019</DropdownItem>
            <DropdownItem onClick={e => setYear(2018)}>2018</DropdownItem>
            <DropdownItem onClick={e => setYear(2017)}>2017</DropdownItem>
            <DropdownItem onClick={e => setYear(2016)}>2016</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={dateRangeData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='labels' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='count' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
};

BarchartMonthly.propTypes = {
  items: PropTypes.array
};

export default BarchartMonthly;
