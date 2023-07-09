import React from 'react'
import PropTypes from 'prop-types'

const TotalOutstandingLeases = props => {
    const leasesArray = [];
    props.items.forEach(item => {
        if (Date.parse(item.end_date) > Date.now()) {
            leasesArray.push(item._id);
        }; 
    });
    const countLeases = leasesArray.length; 

    return (
        <React.Fragment>
            {countLeases}
        </React.Fragment>
    )
}

TotalOutstandingLeases.propTypes = {
    items: PropTypes.array
}

export default TotalOutstandingLeases
