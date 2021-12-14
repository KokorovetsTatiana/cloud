import {React, Component} from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import FooterHeader from '../../FooterHeader/FooterHeader';
import FooterParagraph from '../../FooterParagraph/FooterParagraph';
import FooterSlider from '../../FooterSlider/FooterSlider';
import { Tablet, Desktop } from '../../../utils/mediaQuery';

export default class Footer extends Component {
  render() {
    return (
    <section className={styles.footer}> 
    <Tablet>
      <div className={styles.footerSliderCont}>
        <FooterSlider />
      </div>
    </Tablet>
        
    <Desktop>
      <ul className={styles.footerSlick }>
        <li className={styles.footerItem}>
          <FooterHeader text={'About us'} />
          <FooterParagraph text={'When using the SKYBOX Services You may transmit, store and or share certain data, information, files, etc. (altogether “Service Data”). For the avoidance of doubt, You retain full ownership of Your Service Data. SKYBOX doea that You or any other uss while using the Service. SKYBOX agrees that these Terms do not grant'}/>
        </li>
        <li className={styles.footerItem}>
          <FooterHeader text={'Featured links'} />
          <ul>
            <li>
              <Link><FooterParagraph text={'Pricing'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Contact'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'DMCA'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Refund Policy'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Privacy Policy'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Terms of Service'}/></Link>
            </li>
          </ul>
        </li>
        <li className={styles.footerItem}>
          <FooterHeader text={'Contact us'} />
          <ul>
            <li>
              <Link><FooterParagraph text={'Our office'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Digitalgoals LTD'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Lapathou, 6, Stravalos 20257'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Lefkosia, Cyprus'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Phone: +37 06 225 29 36'}/></Link>
            </li>
            <li>
              <Link><FooterParagraph text={'Email: mail@example.com'}/></Link>
            </li>
          </ul>
        </li>
      </ul>
    </Desktop>
    <FooterParagraph text={'Copyright © 2016 - 2021 - SkyBox - Online File Storage'} />
    </section>
  );
}
}