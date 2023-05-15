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

    return (
        <div className={styles.buttonsContainer}>
            <button
                disabled={
                    count === countMax
                    || countMax < 0
                    || countStart < 0
                    || countStart > countMax
                    || countMax === countStart
                }
                onClick={increaseCount}>
                <div className={styles.fontButton}>inc</div>
            </button>
            <button disabled={
                count === countStart
                || countMax < 0 || countStart < 0
                || countMax === countStart
            }
                    onClick={resetCount}>
                <div className={styles.fontButton}>reset</div>
            </button>
        </div>
    );
};

export default Buttons;
