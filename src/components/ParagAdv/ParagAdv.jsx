import React from 'react';
import styles from './ParagAdv.module.scss';

const paragAdv = ({text}) => {
    return (
        <h2 className={styles.secHeading}>
            {text}
        </h2>
    )
}

export default paragAdv;