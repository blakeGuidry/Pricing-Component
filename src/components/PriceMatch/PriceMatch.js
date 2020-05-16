import React from 'react';
import styles from './style.css';

const PriceMatch = (props) => {
//use hook to hold button popout by useState?
let matchedPrice = (Math.round(props.pricing - props.matching))
  return (
    <div className = {styles.priceMatchContainer}>
      <button className={styles.priceMatchBadge}>&nbsp;&nbsp;Price Match Never Guarantee:</button>
      <div className={styles.pricing}>
      <a className = {styles.dollarSign}>$</a>
      <span>{props.pricing && `${Number.parseFloat(props.pricing).toFixed(2)}`}&nbsp;</span>
      </div>

      <div className = {styles.priceMatcherContainer}>
        <div className = {styles.matchedPrice}>&nbsp;&nbsp;
        {
          matchedPrice >= 0 ?
          `Lose $${matchedPrice}` : `Save $${matchedPrice}`
        }&nbsp;&nbsp;</div>
        <span>{props.matching && `Was $${props.matching}`}</span>
      </div>

    </div>
  )
}
export default PriceMatch;
