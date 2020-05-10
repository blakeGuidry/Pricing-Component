import React from 'react';
import styles from './style.css';

const PriceMatch = (props) => {
//use hook to hold button popout by useState?
let matchedPrice = (props.pricing - props.matching)
  return (
    <div className = {styles.priceMatchContainer}>
      <button className={styles.priceMatchBadge} type="button" id="btn"> Price Match Never Guarantee:</button>
      <div className={styles.pricing}>
      <a className = {styles.dollarSign}>$</a>
      <span>{`${props.pricing}`}&nbsp;</span></div>
      <div className = {styles.priceMatcherContainer}>
        <div className = {styles.matchedPrice}>&nbsp;&nbsp;{`Lose $${matchedPrice}`}&nbsp;&nbsp;</div>
        <span>{`Was $${props.matching}`}</span>
      </div>

    </div>
  )

}
export default PriceMatch;
