import React from 'react';
import styles from './ParagHero.module.scss';

const RaragHero = ({text}) => {
    return (
        <p className={styles.paragHero}>
            {text}
        </p>
    )
}

export default RaragHero;