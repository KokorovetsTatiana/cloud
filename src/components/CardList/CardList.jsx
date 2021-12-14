import React from 'react';
import styles from './CardList.module.scss';

const CardList = () => {
  return (
    <ul className={styles.cardList}>
        <li className={styles.cardItem}>
            <p className={styles.cardText}>1 Tb Free space</p>
        </li>
        <li className={styles.cardItem}>
            <p className={styles.cardText}>4 Tb Monthly space</p>
        </li>
        <li className={styles.cardItem}>
            <p className={styles.cardText}>100 Mbit Speed</p>
        </li>
        <li className={styles.cardItem}>
            <p className={styles.cardText}>3000 sessions</p>
        </li>
    </ul>
  );
}

export default CardList;