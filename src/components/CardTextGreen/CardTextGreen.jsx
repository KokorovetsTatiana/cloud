import React from 'react';
import styles from './CardTextGreen.module.scss';

const CardTextGreen = ({text}) => {
  return (
    <p className={styles.cardTextGreen}>
      {text}
    </p>
  );
}

export default CardTextGreen;