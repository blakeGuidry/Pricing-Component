import React from 'react';

const Fullfillment = (props) => {
//use hooks here
  return (
    <div id="pricing-fullfillment">

    <div>
      <strong id= "pickup">Pick up in 1 hour at San Marcos</strong>
      <div><a href="">Check all stores</a>
      </div>
      <div><strong>Important Update: </strong><a role="button" target="_blank" data-track="Learn about our new safety measures for getting your order" href="/site/clp-global/shop-confidently/pcmcat1584713369767.c?id=pcmcat1584713369767"> Learn about our new safety measures for getting your order</a>
      </div>
      <div><strong>Shipping:</strong> <span >FREE</span> <span>Shipping by Mon,&nbsp;May&nbsp;11</span> or see more options in checkout  to <span ><a href="" aria-expanded="false">78666</a></span>
      </div>
    </div>

    <p><b>{`Availability: ${props.availability}`}</b></p>



    </div>
  )

}
export default Fullfillment;