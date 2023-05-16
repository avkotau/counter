import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import FirstCounter from "./Components/FIrstCounter/FirstCounter";
import SecondCounter from "./Components/SecondCounter/SecondCounter";

function App(): JSX.Element {

    let [count, setCount] = useState<number>(0);
    let [countMax, setCountMax] = useState<number>(0);
    let [countStart, setCountStart] = useState<number>(0);

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

    useEffect(() => {
        let getLocalStartCount = localStorage.getItem('countStart')
        let getLocalMaxCount = localStorage.getItem('countMax')

        if (getLocalStartCount) {
            let newCountValue = JSON.parse(getLocalStartCount)
            setCountStart(newCountValue)
        }

        if (getLocalMaxCount) {
            let newCountValue = JSON.parse(getLocalMaxCount)
            setCountMax(newCountValue)
        }

    }, [])

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
            />
            <SecondCounter
                setValue={setValue}
                changeCountMax={changeCountMax}
                changeCountStart={changeCountStart}
                countStart={countStart}
                countMax={countMax}
            />
        </div>
    );
}

export default App;
