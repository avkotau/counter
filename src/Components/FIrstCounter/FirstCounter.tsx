import React, { useState } from 'react';
import stylesContainer from '../../CommonStyles.module.css'
import Display from "./Display";
import Buttons from "../SecondCounter/Buttons/Buttons";

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
        <div className={stylesContainer.container}>
            <Display
                countMax={countMax}
                count={count}
                countStart={countStart}
            />
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
