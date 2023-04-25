import React from 'react';
import styles from './Buttons.module.css'

type IncreaseButtonPropsType = {
    setValue: () => void
    count: number
}

const Buttons: React.FC<IncreaseButtonPropsType> = (
    {
        setValue,
    }

) => {

    return (
        <div className={styles.buttonsContainer}>
            <button onClick={setValue}><div className={styles.fontButton}>set</div></button>
        </div>
    );
};

export default Buttons;
