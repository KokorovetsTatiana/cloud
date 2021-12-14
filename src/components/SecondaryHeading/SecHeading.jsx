import React from 'react';
import styles from './SecHeading.module.scss';

const secHeading = ({text}) => {
    return (
        <h2 className={styles.secHeading}>
            {text}
        </h2>
    )
}

export default secHeading;