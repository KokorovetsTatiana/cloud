import React from 'react';
import styles from './LoginPage.module.scss';

import MainHeader from '../../components/MainHeader/MainHeader';
import SecHeadingUL from '../../components/SecHeadingUnderLine/SecHeadingUL';
import Statistics from '../../components/shared/Statistics/Statistics';
import Footer from '../../components/shared/Footer/Footer';
import Input from '../../components/Input/Input';
import Btn from '../../components/Btn/Btn';

const LoginPage = () => (
  <div>
    <section className={styles.container}>
      <MainHeader text={'login'} />
      <SecHeadingUL text={'online storage'} />
      <Input name={'Your Email'} text={'mail@example.com'} />
      <Input name={'Password   '} text={'*********'} type="password"/>
      <Btn text={'Login'} btnAction={'U logged in successfully'} />
      <a href="https://support.google.com/accounts/answer/7682439?hl=ru" className={styles.link}>Forget password</a>
    </section>
    <Statistics />
    <Footer />
  </div>
);

export default LoginPage;