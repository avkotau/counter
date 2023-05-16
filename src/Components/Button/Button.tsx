import React from 'react';
import styles from './Button.module.css'

type IncreaseButtonPropsType = {
    setValue?: () => void
    children?: React.ReactNode
    disabled: boolean
    resetCount?: () => void
}

const Button: React.FC<IncreaseButtonPropsType> = (
    {
        setValue,
        disabled,
        children,
        resetCount
    }
) => {

    return (
        <div className={styles.buttonContainer}>
            <button onClick={setValue || resetCount}
                    disabled={disabled}
                    className={styles.fontButton}
            >{children}
            </button>
        </div>
    );
};

export default Button;
