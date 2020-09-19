import React, { useState } from 'react';
import {b} from './properties'
const Board = () => {
    const[board, setBoard] = useState(b);
    const[seenNumbers, setSeenNumber] = useState([]);

    const generateNumber = () => {
        if(seenNumbers.length == 90){
            alert('Game Over');
            return;
        }
        while(true){
            let num = getRandomNum(1,90);
            if(!seenNumbers.includes(num)){
                console.log(num);
                setSeenNumber([...seenNumbers, num]);
                break;
            }
        }
    }

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return(
    <div className="container">
    <div className="generator-container">
    <input type="button" value="Generate" onClick={() => generateNumber()}/>
    <br/>
    <div className = "number"> {seenNumbers[seenNumbers.length-1]}</div>
    </div>
    <div className="board">
        {board.map((element, index) => <div className={`square ${seenNumbers.includes(index+1) ? 'generated' : ''}`}>{element}</div>)}
    </div>
    </div>
    );
}

export default Board;