import {React, Component} from 'react';

import styles from './Statistics.module.scss';
import StatNumber from '../../StatNumber/StatNumber';
import StatText from '../../StatText/StatText';

export default class Statistics extends Component {
  render() {
    return (
    <section className={styles.stat}> 
        <ul className={styles.itemsList}>
            <li className={styles.statItem}>
                <div className={styles.iconQuantity}></div>
                <StatNumber text={'999 529 000 000'}/>
                <StatText text={'Загружено файлов на сервис'} />
            </li>
            <li className={styles.statItem}>
                <div className={styles.iconAdd}></div>
                <StatNumber text={'235 764 784'}/>
                <StatText text={'Зарегистрировано пользователей'} />
            </li>
        </ul>
    </section>
  );
}
}