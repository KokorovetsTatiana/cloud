import { React, Component } from 'react';

import styles from './PriceCardsPricingPage.module.scss';
import PriceCardsSlick from '../PriceCardsSlick/PriceCardsSlick';
import CardTextGreen from '../../CardTextGreen/CardTextGreen';
import CardHeading from '../../CardHeading/CardHeading';
import CardList from '../../CardList/CardList';
import CardPrice from '../../CardPrice/CardPrice';
import CardParagraph from '../../CardParagraph/CardParagraph';
import Button from '../../Btn/Btn';
import MainHeader from '../..//MainHeader/MainHeader';
import SecHeadingUL from '../../SecHeadingUnderLine/SecHeadingUL';

import { Tablet, Desktop } from '../../../utils/mediaQuery';

export default class PriceCardsPricingPage extends Component {
    render() {
        return (
            <section className={styles.membership}>
                <Tablet>
                    <MainHeader text={'prices'} />
                    <div className={styles.cardsSliderCont}>
                        <PriceCardsSlick />
                    </div>
                </Tablet>

                <Desktop>
                    <MainHeader text={'tariff plans'} />
                    <SecHeadingUL text={'Online storage'} />
                    <ul className={styles.cardCont}>
                        <li className={styles.card+' '+styles.firstCard}>
                            <CardHeading text={'30 days'} />
                            <CardPrice text={'$20.99'} />
                            <CardList />
                            <Button text={'Sign Up'} btnAction={"You've signed up for 30 days successfully"} />
                            <CardParagraph />
                        </li>
                        <li className={styles.card+' '+styles.secondCard}>
                            <CardTextGreen text={'Most popular'} />
                            <CardHeading text={'90 days'} />
                            <CardPrice text={'$46.99'} />
                            <CardList />
                            <Button text={'Sign Up'} btnAction={"You've signed up for 90 days successfully"} />
                            <CardParagraph />
                        </li>
                        <li className={styles.card+' '+styles.thirdCard}>
                            <CardHeading text={'365 days'} />
                            <CardPrice text={'$127.99'} />
                            <CardList />
                            <Button text={'Sign Up'} btnAction={"You've signed up for 365 days successfully"} />
                            <CardParagraph />
                        </li>
                    </ul>
                </Desktop>
            </section>
        );
    }
}