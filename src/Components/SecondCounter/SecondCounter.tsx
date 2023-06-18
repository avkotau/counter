import React, { ChangeEvent, useState } from 'react';
import stylesContainer from '../../CommonStyles.module.css';
import stylesBtn from '../../CommonStyles.module.css'
import Display from "./Display";
import Button from "../Button/Button";

export type CountType = {
    setValue: () => void
    changeCountMax: (e: ChangeEvent<HTMLInputElement>) => void
    changeCountStart: (e: ChangeEvent<HTMLInputElement>) => void
    countMax: number
    countStart: number
    handleFocus: () => void
    handleBlur: () => void
}

const SecondCounter: React.FC<CountType> = (
    {
        setValue,
        changeCountMax,
        changeCountStart,
        countMax,
        countStart,
        handleFocus,
        handleBlur
    }
) => {


    return (
        <div className={stylesContainer.container}>

            <Display
                changeCountMax={changeCountMax}
                changeCountStart={changeCountStart}
                countMax={countMax}
                countStart={countStart}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
            />
            <div className={stylesBtn.btnsContainer}>

                <Button
                    disabled={
                        countMax < 0
                        || countStart < 0
                        || countMax <= countStart
                    }
                    setValue={setValue}
                >set</Button>
            </div>

        </div>
    );
};

export default SecondCounter;
