import React, { useState } from 'react';
import styles from './Counter.module.css'
import Display from "./Display";
import Buttons from "./Buttons";

export type PropsType = {
    count: number
    countMax: number
    increaseCount: () => void
    resetCount: () => void
    countStart: number
}

const FirstCounter: React.FC<PropsType> = (
    {
        count,
        countMax,
        increaseCount,
        resetCount,
        countStart,
    }
) => {

    return (
        <div className={styles.counterContainer}>
            <Display countMax={countMax} count={count} countStart={countStart}/>
            <Buttons
                count={count}
                countMax={countMax}
                increaseCount={increaseCount}
                resetCount={resetCount}
                countStart={countStart}
            />
        </div>
    );
};

export default FirstCounter;
