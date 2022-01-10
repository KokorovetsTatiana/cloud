import React from 'react';
import styles from './SignUpPage.module.scss';

import MainHeader from '../../components/MainHeader/MainHeader';
import SecHeadingUL from '../../components/SecHeadingUnderLine/SecHeadingUL';
import Statistics from '../../components/shared/Statistics/Statistics';
import Footer from '../../components/shared/Footer/Footer';
import Input from '../../components/Input/Input';
import Btn from '../../components/Btn/Btn';

const SignUpPage = () => (
  <div>
    <section className={styles.container}>
      <MainHeader text={'register'} />
      <SecHeadingUL text={'online storage'} />
      <Input name={'Your Email'} text={'mail@example.com'} />
      <Input name={'Password   '} text={'*********'} type="password" />
      <div className={styles.check}>
        <input type="checkbox" id="scales" name="scales" ></input>
        <label htmlFor="scales">I agree with terms of use</label>
        </div>
      <Btn text={'Register'} btnAction={'Confirmation letter has been sent to your email'} />
    </section>
    <Statistics />
    <Footer />
  </div>
);

export default SignUpPage;