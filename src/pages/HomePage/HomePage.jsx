import React from 'react';

import styles from './HomePage.module.scss';
import Statistics from '../../components/shared/Statistics/Statistics';
import Footer from '../../components/shared/Footer/Footer';
import PriceCards from '../../components/shared/PriceCards/PriceCards'


const HomePage = () => (
  <div className={styles.container}>
    <PriceCards />
    <Statistics />
    <Footer />
  </div>
);

export default HomePage;