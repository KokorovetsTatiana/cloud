import React, {Suspense } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './Header.module.scss';
import Loader from './components/Loader/Loader';

import HomePage from '../src/pages/HomePage/HomePage';
import PricingPage from '../src/pages/PricingPage/PricingPage';
import ContactsPage from '../src/pages/ContactsPage/ContactsPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import SignUpPage from '../src/pages/SignUpPage/SignUpPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className={styles.mainContainer}>
      <Navbar className={styles.navbar}>
         <Navbar.Brand className={styles.navbarBrand} href="practical-blackwell-4aac6f/">
           SKYBOX
         </Navbar.Brand>
         <Navbar.Collapse className={styles.navbarPages}>
          <Nav className={styles.navbarLinks}>
            <Nav.Link className={styles.navItem} href="practical-blackwell-4aac6f/">
               Home
             </Nav.Link>
             <Nav.Link className={styles.navItem} href="practical-blackwell-4aac6f/price">
               Pricing
             </Nav.Link>
             <Nav.Link className={styles.navItem} href="practical-blackwell-4aac6f/contacts">
               Contacts
             </Nav.Link>
          </Nav>
          <Nav className={styles.navbarButtons}>
            <Nav.Link className={styles.navItemBtn} href="practical-blackwell-4aac6f/login">
               LOGIN
             </Nav.Link>
             <Nav.Link className={styles.navItemBtn} href="practical-blackwell-4aac6f/signup">
               SIGN UP
             </Nav.Link>
          </Nav>
         </Navbar.Collapse>
       </Navbar>

      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route exact path="practical-blackwell-4aac6f/" component={HomePage} />
            <Route exact path="practical-blackwell-4aac6f/price" component={PricingPage} />
            <Route exact path="practical-blackwell-4aac6f/contacts" component={ContactsPage} />
            <Route exact path="practical-blackwell-4aac6f/login" component={LoginPage} />
            <Route exact path="practical-blackwell-4aac6f/signup" component={SignUpPage} />
            <Route exact path="practical-blackwell-4aac6f/notfound" component={NotFoundPage} />
          </Switch>
        </Router>
      </Suspense>
    </div>
    
  );
}

export default App;
