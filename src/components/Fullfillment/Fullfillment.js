import React from 'react';
import classNames from 'classnames';
import styles from './style.css';

const Fullfillment = (props) => {
//use hooks here
  return (
    <div className ={styles.pricingFullfillment}>

      <div>
        <strong className={styles.pickup} id= "pickup">
          Pick up in 1 hour at San Marcos
        </strong>
      </div>
      <div className ={styles.checkStores}>
        <a >Check all stores</a>
      </div>

      <a className = {styles.actFast}>
      Act Fast </a>
      <a className = {styles.availability}>{` - Only ${props.availability} left at your store!`}</a>

      <div className= {styles.impUpdateContainer}>
      <a className={styles.impUpdateTitle}>Important Update: </a>
      <div className={styles.impUpdate} >
          &nbsp;Learn about our new safety measures for getting your order
        </div>
      </div>

      <div className ={styles.shippingInfo}>
      <strong>Shipping:</strong>
      <span >FREE</span> <span>Shipping by Mon,&nbsp;May&nbsp;11</span> or Next-Day Delivery is available to <div className = {styles.shippingZip}>78666</div>
      </div>


    </div>
  )

}
export default Fullfillment;