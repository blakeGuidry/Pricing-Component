import React from 'react';

const PriceMatch = (props) => {
//use hook to hold button popout by useState?
  return (
    <div id="pricing-match">
    <button type="button" id="btn"> Price Match Guarantee:</button>
      <span>{`$${props.matching}`}</span>
    </div>
  )

}
export default PriceMatch;
