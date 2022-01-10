import React from 'react';
import styles from './Input.module.scss';

const Input = ({
    name, text
}) => {
    return (
        <p className={styles.inputCont}>
            <label className={styles.label}>{name}</label>
            <input type="text" value={text} className={styles.alias} />
        </p>
    )
}

export default Input;
