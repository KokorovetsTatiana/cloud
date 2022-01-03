import React, {Suspense } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './Header.module.scss';
import Loader from './components/Loader/Loader';

import HomePage from '../src/pages/HomePage/HomePage';
import PricingPage from '../src/pages/PricingPage/PricingPage';
import ContactsPage from '../src/pages/ContactsPage/ContactsPage';
import FAQPage from '../src/pages/FAQPage/FAQPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import SignUpPage from '../src/pages/SignUpPage/SignUpPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';
// import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className={styles.mainContainer}>
      <Navbar className={styles.navbar}>
         <Navbar.Brand className={styles.navbarBrand} href="/">
           SKYBOX
         </Navbar.Brand>
         <Navbar.Collapse className={styles.navbarPages}>
          <Nav className={styles.navbarLinks}>
            <Nav.Link className={styles.navItem} href="/">
               Home
             </Nav.Link>
             <Nav.Link className={styles.navItem} href="/price">
               Pricing
             </Nav.Link>
             <Nav.Link className={styles.navItem} href="/contacts">
               Contacts
             </Nav.Link>
          </Nav>
          <Nav className={styles.navbarButtons}>
            <Nav.Link className={styles.navItemBtn} href="/login">
               LOGIN
             </Nav.Link>
             <Nav.Link className={styles.navItemBtn} href="/signup">
               SIGN UP
             </Nav.Link>
          </Nav>
         </Navbar.Collapse>
       </Navbar>

      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/price" component={PricingPage} />
            <Route exact path="/contacts" component={ContactsPage} />
            <Route exact path="/faq" component={FAQPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/notfound" component={NotFoundPage} />
          </Switch>
        </Router>
      </Suspense>

      {/* <MainHeader text={"This application is designed to store your files."}/> */}
    </div>
    
  );
}

export default App;
