import React from 'react';

const AddToCart = (props) => {

  return (
  <div id="pricing-cart">
    <button type="button" id="btn-cart"> Add To Cart</button>
    <br></br>

    <label>
    <input type="checkbox" id="first-checkBox"></input>
      Compare
    </label>
    <img src="https://assets.bbystatic.com/node-cusoweb/shop/save-for-later/dist/client/images/dc5b324bc35ff0a95420455e389225dc.svg" ></img>
      Save

      <div><b id="hereToHelp"> We're here to help.</b> </div>
      <div class="PLbuttons"><button type="button" class="btn-help " data-track="Contact Anywhere: Chat Now">Chat Now</button></div>
      <div class="imageContainer"><img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GS-BS01-132098.png"  alt="Best Buy Support Team"></img></div>
      
  </div>

  )

}
export default AddToCart;
