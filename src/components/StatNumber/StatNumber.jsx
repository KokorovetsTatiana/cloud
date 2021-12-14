import React from 'react';
import styles from './StatNumber.module.scss';

const StatNumber = ({text}) => {
  return (
    <h4 className={styles.statNumber}>
      {text}
    </h4>
  );
}

export default StatNumber;