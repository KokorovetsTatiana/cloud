import React from 'react';
import styles from './FooterHeader.module.scss';

const FooterHeader = ({text}) => {
  return (
    <h4 className={styles.footerHeader}>
      {text}
    </h4>
  );
}

export default FooterHeader;
