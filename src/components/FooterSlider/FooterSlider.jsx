import {React, Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


import styles from './FooterSlider.module.scss';
import FooterHeader from '../FooterHeader/FooterHeader';
import FooterParagraph from '../FooterParagraph/FooterParagraph';

export default class FooterSlider extends Component {
  render() {
      const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
    <Slider {...settings} className={styles.footerSlick}>
        <div>
          <FooterHeader text={'About us'} />
          <FooterParagraph text={'When using the SKYBOX Services You may transmit, store and or share certain data, information, files, etc. (altogether “Service Data”). For the avoidance of doubt, You retain full ownership of Your Service Data. SKYBOX doea that You or any other uss while using the Service. SKYBOX agrees that these Terms do not grant'}/>
        </div>
        <div>
          <FooterHeader text={'Featured links'} />
          <ul>
            <li>
              <Link to='/'><FooterParagraph text={'Pricing'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Contact'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'DMCA'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Refund Policy'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Privacy Policy'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Terms of Service'}/></Link>
            </li>
          </ul>
        </div>
        <div>
          <FooterHeader text={'Contact us'} />
          <ul>
            <li>
              <Link to='/'><FooterParagraph text={'Our office'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Digitalgoals LTD'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Lapathou, 6, Stravalos 20257'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Lefkosia, Cyprus'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Phone: +37 06 225 29 36'}/></Link>
            </li>
            <li>
              <Link to='/'><FooterParagraph text={'Email: mail@example.com'}/></Link>
            </li>
          </ul>
            </div>
        </Slider>
  );
}
}