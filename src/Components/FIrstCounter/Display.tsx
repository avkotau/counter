import React from 'react';
import styles from './Display.module.css'


type PropsType = {
    count: number
    countMax: number
    countStart: number
    messageFocus: string
}

const Display: React.FC<PropsType> = (
    {
        count,
        countMax,
        countStart,
        messageFocus
    }
) => {
    console.log('countStart, countMax', countStart, countMax)
    console.log('handleFocus', messageFocus)
    // console.log(' countMax < 0 || countStart < 0 || countMax <= countStart',  countMax < 0, countStart < 0, countMax <= countStart)
    return (
        <div className={styles.displayContainer}>
            {
                countMax < 0 || countStart < 0 || (countMax <= countStart)
                    ? <div className={styles.redText}>Incorrect value!</div>
                    : <div className={
                        count === countMax && countStart >= 0
                            ? styles.redText
                            : styles.dispText}>{!!messageFocus
                        ? messageFocus
                        : count}</div>
            }

        </div>
    );
};

export default Display;
