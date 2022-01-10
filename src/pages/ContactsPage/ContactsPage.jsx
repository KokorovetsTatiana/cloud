import React from 'react';
import styles from './ContactsPage.module.scss';

import MainHeader from '../../components/MainHeader/MainHeader';
import SecHeadingUL from '../../components/SecHeadingUnderLine/SecHeadingUL';
import SecondaryHeading from '../../components/SecondaryHeading/SecHeading';
import Statistics from '../../components/shared/Statistics/Statistics';
import Footer from '../../components/shared/Footer/Footer';
import Input from '../../components/Input/Input';
import Btn from '../../components/Btn/Btn';

const ContactsPage = () => (
  <div className={styles.container}>
    <MainHeader text={'contact'} />
    <SecHeadingUL text={'online storage'} />
    <iframe className={styles.map} title="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182.58159501107804!2d36.230686734115906!3d49.98747155498302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0de439df4b3%3A0x2193ab9ebd286034!2z0JAtTNC1dtC1bA!5e0!3m2!1sru!2sua!4v1641670219604!5m2!1sru!2sua" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
    <section className={styles.contFeedback}>
      <SecondaryHeading text={'Drop us a line'} />
      <SecHeadingUL text={'We would like to recive your feedback.'} />
      <Input name={'Email'} text={'mail@example.com'} />
      <Input name={'Name'} text={'John Doe'} />
      <textarea className={styles.textarea} name="feedback" placeholder="Message"></textarea>
      <SecHeadingUL text={'We do not share your personal data'} />
      <Btn text={'Subscribe'} btnAction={'Thank U for your subscribe'}/>
    </section>
    <Statistics />
    <Footer />
  </div>
);

export default ContactsPage;