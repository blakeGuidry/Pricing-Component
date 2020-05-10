import React from 'react';
import styles from './style.css';

const AddToCart = (props) => {

  return (
  <div className = {styles.pricingCart}>
    <button  className = {styles.cartBtn} >Add To Cart</button>
    <br></br>

    <div className = {styles.compareSave}>
      <a className = {styles.checkboxCompare}>
        <a className = {styles.checkboxPadding}><input className ={styles.checkBox} ></input></a>
      Compare</a>

      <a className={styles.checkboxSave}>
        <div className = {styles.saveForLater}>
          <img className = {styles.imageSave} src="https://assets.bbystatic.com/node-cusoweb/shop/save-for-later/dist/client/images/dc5b324bc35ff0a95420455e389225dc.svg" ></img>
        </div>
        <div className = {styles.savePadding}>Save</div></a>

    </div>
    <div className = {styles.hereHelpContainer}>
      <div className = {styles.picBackdrop}>
        <div className = {styles.titleContainer}>
          <b className={styles.hereToHelp}> We're here to help.</b>
        </div>

        <div className={styles.helperButtonCont}>
          <button type="button" className={styles.btnHelp} data-track="Contact Anywhere: Chat Now">Chat Now
          </button>
        </div>
        <div class="imageContainer">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GS-BS01-132098.png"  alt="Best   Buy Support Team"></img>
        </div>
      </div>
    </div>
<div className = {styles.memberOffers}>
  <h2 className = {styles.titleMemberOffers}>Cardmember Offers</h2>
  <ul className ={styles.rewardCont}>
    <button type="button" className ={styles.rewardBtn}>Get rewards</button>
  </ul>
</div>
  </div>
  )
}
export default AddToCart;