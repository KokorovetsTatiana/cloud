import React from 'react';
import styles from './MainHeader.module.scss';

const MainHeader = ({text}) => {
  return (
    <h1 className={styles.mainHeader}>
      {text}
    </h1>
  );
}

export default MainHeader;