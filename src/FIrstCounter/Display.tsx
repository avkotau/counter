import React, { useState } from 'react';
import styles from './Display.module.css'


type PropsType = {
    count: number
    countMax: number
    countStart: number
}

const Display: React.FC<PropsType> = (
    {
        count,
        countMax,
        countStart
    }
) => {

    return (
        <div className={styles.displayContainer}>
            {
                countMax < 0 || countStart < 0 || countMax === countStart
                    ? <div className={styles.redText}>Incorrect value!</div>
                :<div className={count === countMax && countStart >= 0 ? styles.redText : styles.dispText}>{count}</div>
            }

        </div>
    );
};

export default Display;
