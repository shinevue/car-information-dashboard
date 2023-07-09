import React from 'react'
import PropTypes from 'prop-types'

const ProfitPotential = props => {
    const leasesArray = []; 
    props.items.forEach(item => {
        if (Date.parse(item.end_date) > Date.now()) {
            leasesArray.push(parseInt(item.dealer_total_profit));
        }; 
    });
    const sumProfit = leasesArray.reduce((a,b) => a+b,0); 

    return (
        <React.Fragment>
            {sumProfit}
        </React.Fragment>
    )
}

ProfitPotential.propTypes = {
    items: PropTypes.array
}

export default ProfitPotential
