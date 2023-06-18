import React, { ChangeEvent, useState } from 'react';
import styles from './Display.module.css';

type PropsType = {
    changeCountMax: (e: ChangeEvent<HTMLInputElement>) => void
    changeCountStart: (e: ChangeEvent<HTMLInputElement>) => void
    countMax: number
    countStart: number
    handleFocus: () => void
    handleBlur: () => void

}

const Display: React.FC<PropsType> = (
    {
        changeCountMax,
        changeCountStart,
        countMax,
        countStart,
        handleFocus,
        handleBlur
    }
) => {

    return (
        <div className={styles.displayContainer}>
            <div className={styles.inputContainer}>
                <span className={styles.dispText}>max value:</span>
                <input type="number"
                       onChange={changeCountMax}
                       value={countMax}
                       className={
                           (countMax >= 0 && countMax > countStart)
                               ? styles.input
                               : styles.input + ' ' + styles.inputError}
                       onFocus={handleFocus}
                       onBlur={handleBlur}
                />
            </div>

            <div className={styles.inputContainer}>
                <span className={styles.dispText}>start value:</span>
                <input type="number"
                       onChange={changeCountStart}
                       value={countStart}
                       className={
                           (countStart >= 0 && countStart < countMax)
                               ? styles.input
                               : styles.input + ' ' + styles.inputError}
                       onFocus={handleFocus}
                       onBlur={handleBlur}
                />
            </div>
        </div>
    );
};

export default Display;
