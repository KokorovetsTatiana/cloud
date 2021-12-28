import React from 'react';

import styles from './Btn.module.scss';

const Button = ({ text, btnAction }) => {
    return (
        <button type='button' className={styles.button} onClick={() => console.log({btnAction})}>
            {text}
        </button>
    )
}

export default Button;
