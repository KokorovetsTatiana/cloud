import React from 'react';
import styles from './StatText.module.scss';

const StatText = ({text}) => {
  return (
    <h4 className={styles.statText}>
      {text}
    </h4>
  );
}

export default StatText;