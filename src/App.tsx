import React, { ChangeEvent, useEffect } from 'react';
import './App.css';
import FirstCounter from "./Components/FIrstCounter/FirstCounter";
import SecondCounter from "./Components/SecondCounter/SecondCounter";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setCountMax, setCountStart, setMessageFocus } from "./store/reduser";

function App(): JSX.Element {

    const dispatch = useDispatch();
    let count = useSelector((state: {count: number} )=> state.count);
    const countStart = useSelector((state: {countStart: number} )=> state.countStart);
    const countMax = useSelector((state: {countMax: number} )=> state.countMax);
    const messageFocus = useSelector((state: {messageFocus: string} )=> state.messageFocus);


    const setValue = () => {
        dispatch(setCountMax(countMax))
        dispatch(setCount(count))

    }

    const changeCountMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountMax(Number(e.currentTarget.value)))
    }

    const changeCountStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountStart(Number(e.currentTarget.value)))
    }

    const increaseCount = () => {
        dispatch(setCount(count += 1))
    }

    const resetCount = () => {
        dispatch(setCount(countStart))
    }

    const handleFocus = () => {
        dispatch(setMessageFocus("enter values and press 'set'"))
    }

    const handleBlur = () => {
        dispatch(setMessageFocus(''))
    }


    useEffect(() => {
        // localStorage.setItem('countStart', JSON.stringify(countStart))
        // localStorage.setItem('countMax', JSON.stringify(countMax))

        // store.dispatch({ type: 'INCREMENT_START' });
    }, [countStart])

    useEffect(() => {
        // localStorage.setItem('countStart', JSON.stringify(countStart))
        // localStorage.setItem('countMax', JSON.stringify(countMax))
        // store.dispatch({ type: 'INCREMENT_MAX' });
    }, [countMax])


    return (
        <div className="App">
            <FirstCounter
                countMax={countMax}
                count={count}
                increaseCount={increaseCount}
                resetCount={resetCount}
                countStart={countStart}
                messageFocus={messageFocus}
            />
            <SecondCounter
                setValue={setValue}
                changeCountMax={changeCountMax}
                changeCountStart={changeCountStart}
                countStart={countStart}
                countMax={countMax}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
            />
        </div>
    );
}

export default App;
