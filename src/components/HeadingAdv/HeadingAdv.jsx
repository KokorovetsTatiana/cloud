import React from 'react';
import styles from './HeadingAdv.module.scss';

const headingAdv = ({text}) => {
    return (
        <h2 className={styles.advHeading}>
            {text}
        </h2>
    )
}

export default headingAdv;