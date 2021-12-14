import React from 'react';
import styles from './CardPrice.module.scss';

const CardPrice = ({text}) => {
  return (
    <p className={styles.cardPrice}>
      {text}
    </p>
  );
}

export default CardPrice;