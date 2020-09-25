import React, { useState, useEffect } from 'react';
import { b } from './properties';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-slot-machine.css'

const Board = () => {
    const [board, setBoard] = useState(b);
    const [seenNumbers, setSeenNumber] = useState([]);
    const [odometerValue, setOdometerValue] = useState(99);

    useEffect(() => {
        setOdometerValue(seenNumbers[seenNumbers.length - 1]);
    }, [seenNumbers])

    const generateNumber = () => {
        if (seenNumbers.length == 90) {
            alert('Game Over');
            return;
        }
        while (true) {
            let num = getRandomNum(1, 90);
            if (!seenNumbers.includes(num)) {
                console.log(num);
                setSeenNumber([...seenNumbers, num]);
                break;
            }
        }
    }

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="container">
            <div className="generator-container">
                <input type="button" value="Generate" onClick={() => generateNumber()} />
                <br/>
                <div style={{lineHeight:'24px', fontSize: '24px', margin: '10px'}}>
                <Odometer format="dd" duration={ 500 } value={ odometerValue } />
                </div>
            </div>
            <div className="board">
                {board.map((element, index) => <div className={`square ${seenNumbers.includes(index + 1) ? 'generated' : ''}`}>{element}</div>)}
            </div>
        </div>
    );
}

export default Board;