import React from 'react';
import styles from './Buttons.module.css'

type IncreaseButtonPropsType = {
    countMax: number
    countStart: number
    setValue: () => void
}

const Buttons: React.FC<IncreaseButtonPropsType> = (
    {
        countMax,
        countStart,
        setValue,
    }

) => {

    return (
        <div className={styles.buttonsContainer}>
            <button onClick={setValue}
                    disabled={
                        countMax < 0
                        || countStart < 0
                        || countMax === countStart
                    }
            ><div className={styles.fontButton}>set</div></button>
        </div>
    );
};

export default Buttons;
