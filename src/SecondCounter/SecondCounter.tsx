import React, { ChangeEvent, useState } from 'react';
import styles from './Counter.module.css'
import Display from "./Display";
import Buttons from "./Buttons";

export type CountType = {
    count: number
    setValue: () => void
    changeCountMax: (e: ChangeEvent<HTMLInputElement>) => void
    changeCountStart: (e: ChangeEvent<HTMLInputElement>) => void
    countMax: number
    countStart: number

}

const SecondCounter: React.FC<CountType> = (
    {
        count,
        setValue,
        changeCountMax,
        changeCountStart,
        countMax,
        countStart
    }
) => {


    return (
        <div className={styles.counterContainer}>
            <Display
                changeCountMax={changeCountMax}
                changeCountStart={changeCountStart}
                countMax={countMax} count={count}
                countStart={countStart}
            />
            <Buttons
                count={count}
                setValue={setValue}
            />
        </div>
    );
};

export default SecondCounter;
