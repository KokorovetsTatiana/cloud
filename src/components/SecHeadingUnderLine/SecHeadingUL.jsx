import React from 'react';
import styles from './SecHeadingUL.module.scss';

const SecHeadingUL = ({text}) => {
  return (
    <p className={styles.secHeadingULText}>
      {text}
    </p>
  );
}

export default SecHeadingUL;