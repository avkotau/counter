import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import FirstCounter from "./Components/FIrstCounter/FirstCounter";
import SecondCounter from "./Components/SecondCounter/SecondCounter";

function App(): JSX.Element {

    let getLocalStartCount = localStorage.getItem('countStart')
    let getLocalMaxCount = localStorage.getItem('countMax')

    let [count, setCount] = useState<number>(getLocalStartCount ? JSON.parse(getLocalStartCount) : 0);
    let [countStart, setCountStart] = useState<number>(getLocalStartCount ? JSON.parse(getLocalStartCount) : 0);
    let [countMax, setCountMax] = useState<number>(getLocalMaxCount ? JSON.parse(getLocalMaxCount) : 0);
    let [messageFocus, setMessageFocus] = useState<string>('');

    const setValue = () => {
        setCountMax(countMax)
        setCount(countStart)
    }

    const changeCountMax = (e: ChangeEvent<HTMLInputElement>) => {
        setCountMax(Number(e.currentTarget.value))
    }

    const changeCountStart = (e: ChangeEvent<HTMLInputElement>) => {
        setCountStart(Number(e.currentTarget.value))
    }

    const increaseCount = () => {
        setCount(count += 1)
    }

    const resetCount = () => {
        setCount(countStart)
    }

    const handleFocus = () => {

        setMessageFocus("enter values and press 'set'")
    }

    const handleBlur = () => {
        setMessageFocus('')
    }



    useEffect(() => {
        localStorage.setItem('countStart', JSON.stringify(countStart))
        localStorage.setItem('countMax', JSON.stringify(countMax))
    }, [countStart, countMax])


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
