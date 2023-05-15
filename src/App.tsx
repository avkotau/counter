import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import FirstCounter from "./FIrstCounter/FirstCounter";
import SecondCounter from "./SecondCounter/SecondCounter";
import { json } from "stream/consumers";

function App(): JSX.Element {

    let [count, setCount] = useState<number>(0);
    let [countMax, setCountMax] = useState<number>(0);
    let [countStart, setCountStart] = useState<number>(0);

    const setValue = () => {
        setCountMax(countMax)
        // if (countStart)
        setCount(countStart)
    }
    console.log('countMax',countMax,'countStart',countStart)
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

    useEffect(() => {
        let getLocalString = localStorage.getItem('countValue')

        if (getLocalString) {
            let newCountValue = JSON.parse(getLocalString)
            setCount(newCountValue)

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    return (
        <div className="App">
            <FirstCounter
                countMax={countMax}
                count={count}
                increaseCount={increaseCount}
                resetCount={resetCount}
                countStart={countStart}

            />
            <SecondCounter
                setValue={setValue}
                changeCountMax={changeCountMax}
                changeCountStart={changeCountStart}
                countStart={countStart}
                count={count}
                countMax={countMax}
            />
        </div>
    );
}

export default App;
