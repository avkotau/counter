import React from 'react';
import styles from './Buttons.module.css'

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
    debugger
    return (
        <div className={styles.buttonsContainer}>
            <button disabled={count === countMax && countStart > 0} onClick={increaseCount}><div className={styles.fontButton}>inc</div></button>
            <button disabled={count === countStart} onClick={resetCount}><div className={styles.fontButton}>reset</div></button>
        </div>
    );
};

export default Buttons;
