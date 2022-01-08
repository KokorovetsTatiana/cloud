import React from 'react';

import styles from './PricingPage.module.scss';
import Statistics from '../../components/shared/Statistics/Statistics';
import Footer from '../../components/shared/Footer/Footer';
import PriceCardsPricingPage from '../../components/shared/PriceCardsPricingPage/PriceCardsPricingPage';

const PricingPage = () => (
  <div className={styles.container}>
    <PriceCardsPricingPage />
    <Statistics />
    <Footer />
  </div>
);

export default PricingPage;