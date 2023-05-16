import React from 'react';
import styles from '../../../CommonStyles.module.css'
import Button from "../../Button/Button";

type IncreaseButtonPropsType = {
    increaseCount: () => void
    resetCount: () => void
    count: number
    countMax: number
    countStart: number
}

const Buttons: React.FC<IncreaseButtonPropsType> = (
    {
        increaseCount,
        resetCount,
        count,
        countMax,
        countStart,
    }
) => {

    return (
        <div className={styles.btnsContainer}>

            <Button
                disabled={
                    count === countMax
                    || countMax < 0
                    || countStart < 0
                    || countStart > countMax
                    || countMax <= countStart
                }
                setValue={increaseCount}
            >inc</Button>

            <Button
                disabled={
                    count === countStart
                    || countMax < 0 || countStart < 0
                    || countMax <= countStart
                }
                resetCount={resetCount}
            >reset</Button>
        </div>
    );
};

export default Buttons;
