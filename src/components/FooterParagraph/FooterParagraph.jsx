import React from 'react';
import styles from './FooterParagraph.module.scss';

const FooterParagraph = ({text}) => {
  return (
    <p className={styles.footerParagraph}>
      {text}
    </p>
  );
}

export default FooterParagraph;
