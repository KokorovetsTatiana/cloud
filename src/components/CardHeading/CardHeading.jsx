import React from 'react';
import styles from './CardHeading.module.scss';

const CardHeading = ({text}) => {
  return (
    <h4 className={styles.cardHeading}>
      {text}
    </h4>
  );
}

export default CardHeading;