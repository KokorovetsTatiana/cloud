import React from 'react';

import styles from './HomePage.module.scss';
import Statistics from '../../components/shared/Statistics/Statistics';
import Footer from '../../components/shared/Footer/Footer';
import PriceCards from '../../components/shared/PriceCards/PriceCards'
import Advantages from '../../components/shared/Advantages/Advantages';
import Hero from '../../components/shared/Hero/Hero';

const HomePage = () => (
  <div className={styles.container}>
    <Hero />
    <Advantages />
    <PriceCards />
    <Statistics />
    <Footer />
  </div>
);

export default HomePage;