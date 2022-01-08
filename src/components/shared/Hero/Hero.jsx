import {React, Component} from 'react';

import styles from './Hero.module.scss';
import MainHeader from '../../MainHeader/MainHeader';
import SecHeadingUnderLine from '../../SecHeadingUnderLine/SecHeadingUL';
import SecondaryHeading from '../../SecondaryHeading/SecHeading';
import ParagHero from '../../ParagHero/ParagHero';
import Button from '../../Btn/Btn';

export default class Hero extends Component {
  render() {
    return (
    <section className={styles.hero}> 
        <aside className={styles.heroPict}></aside>
        <aside className={styles.heroInfo}>
          <MainHeader text={'Personal and Business'} />
          <SecHeadingUnderLine text={'Online storage'} />
          <SecondaryHeading text={'STORE AND MANAGE ALL YOUR Files!'} />
          <ParagHero text={'Upload multiple files at once and keep them forever on this site. If you are using FireFox or Chrome, you can simply drag & drop your files to begin uploading'} />    
          <Button text={'Try SkyBox Now'} btnAction={"You are ready to try our app!"} />
        </aside>
    </section>
  );
}
}