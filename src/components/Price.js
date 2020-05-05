import React from 'react';

const Price = (props) => {
//use hooks here
  return (
    <div id="pricing-price">
      {`$${props.pricing}`}
    </div>
  )

}
export default Price;
