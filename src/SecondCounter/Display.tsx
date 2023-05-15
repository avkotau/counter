import React, { ChangeEvent, useState } from 'react';
import styles from './Display.module.css';
import { CountType } from "./SecondCounter";


type PropsType = {
    count: number
    changeCountMax: (e: ChangeEvent<HTMLInputElement>) => void
    changeCountStart: (e: ChangeEvent<HTMLInputElement>) => void
    countMax: number
    countStart: number

}


const Display: React.FC<PropsType> = (
    {
        count,
        changeCountMax,
        changeCountStart,
        countMax,
        countStart
    }
) => {
    // console.log('countMax',countMax,'countStart',countStart)
    return (
        <div className={styles.displayContainer}>
            <div className={styles.inputContainer}>
                <span className={styles.dispText}>max value:</span>
                <input type="number" onChange={changeCountMax} value={countMax} className={countMax >= 0 ? styles.input : styles.input +' '+ styles.inputError}/>
            </div>
            <div className={styles.inputContainer}>
                <span className={styles.dispText}>start value:</span>
                <input type="number" onChange={changeCountStart} value={countStart} className={countStart >= 0 ? styles.input : styles.input +' '+ styles.inputError}/>
            </div>
        </div>
    );
};

export default Display;
