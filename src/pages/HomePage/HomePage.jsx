import React from 'react';
import styles from './HomePage.module.scss';
import Statistics from '../../components/shared/Statistics/Statistics';
import Footer from '../../components/shared/Footer/Footer';
import PriceCardsSlick from '../../components/shared/PriceCardsSlick/PriceCardsSlick'


const HomePage = () => (
  <div className={styles.container}>
    <PriceCardsSlick />
    <Statistics />
    <Footer />
  </div>
);

export default HomePage;