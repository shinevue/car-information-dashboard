import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ExpiringTable = props => {
  
  const chartData = props.items.map(item => {
    return {
      _id: item._id,
      name: item.name,
      residual: item.residual_value,
      date: item.end_date
    };
  });
  //chartData.unshift(['Name', 'Residual', 'Date']);

  const columns = [
    {
      dataField: 'name',
      text: 'Customer Name',
      sort: true
    },
    {
      dataField: 'residual',
      text: 'Residual',
      sort: true
    },
    {
      dataField: 'date',
      text: 'End Date',
      sort: true
    }
  ];

  const defaultSorted = [
    {
      dataField: 'date',
      order: 'asc'
    }
  ];

  return (
    <React.Fragment>
      <BootstrapTable
      bootstrap4= {true}
        keyField='_id'
        data={chartData}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
      />
    </React.Fragment>
  );
};

ExpiringTable.propTypes = {
  items: PropTypes.array
};

export default ExpiringTable;
