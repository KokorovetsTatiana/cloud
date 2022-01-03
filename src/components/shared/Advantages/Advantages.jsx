import {React, Component} from 'react';

import styles from './Advantages.module.scss';
import ParagAdv from '../../ParagAdv/ParagAdv';
import HeadingAdv from '../../HeadingAdv/HeadingAdv';

export default class Advantages extends Component {
    render() {
        return (
            <>
                <section className={styles.advantages}>
                    <aside className={styles.advPict}></aside>
                    <ul className={styles.advList}>
                        <li className={styles.advListItem}>
                            <div className={styles.firstItem}></div>
                            <HeadingAdv text={'SAFE AND SECURE'} />
                            <ParagAdv text={'Safely store and backup all your essential files. From family photos & videos to important documents, you can rely on us to store all your media securely and forever.'} />
                        </li>
                        <li className={styles.advListItem}>
                            <div className={styles.secondItem}></div>
                            <HeadingAdv text={'Access from anywhere'} />
                            <ParagAdv text={'Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.'} />
                        </li>
                        <li className={styles.advListItem}>
                            <div className={styles.thirdItem}></div>
                            <HeadingAdv text={'STORE AND MANAGE ALL YOUR FILES!'} />
                            <ParagAdv text={'Upload multiple files at once and keep them forever on this site. If you are using FireFox or Chrome, you can simply drag & drop your files to begin uploading.'} />
                        </li>
                        <li className={styles.advListItem}>
                            <div className={styles.fourthItem}></div>
                            <HeadingAdv text={'Any point of the globe'} />
                            <ParagAdv text={'High speed from any location with internet access! Gigabit networking and high-performance server!'} />
                        </li>
                    </ul>
                </section>
            </>
        )
    }
}