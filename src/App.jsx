import './App.css';
import React, { useState } from 'react';
import Square from './Square';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const winArea = document.getElementById('win');
  const bottomTextArea = document.getElementById('click-or-tap');
  console.log('bottomTextArea', bottomTextArea);
  const blankBoardArray = [];
  for (let i = 0; i < 9; i += 1) {
    blankBoardArray.push('');
  }
  const [ numOfMoves, setNumOfMoves ] = useState(0);
  const [ gameWon, setGameWon ] = useState(false);
  const [ whichTurn, setWhichTurn ] = useState('O');
  const [ clearBoard, setClearBoard ] = useState(false);
  const [ squaresContents, setSquaresContents ] = useState(blankBoardArray);
  // initially, squaresContents === 
  // [ '', '', '',
  //   '', '', '',
  //   '', '', '' ]

  const checkWin = () => {

  };

  const squares = [];
  for (let i = 0; i < 9; i += 1) {
    squares.push(<Square key={i}
      id={i}
      numOfMoves={numOfMoves}
      setNumOfMoves={setNumOfMoves}
      squaresContents={squaresContents}
      setSquaresContents={setSquaresContents}
      clearBoard={clearBoard}
      setClearBoard={setClearBoard}
      whichTurn={whichTurn}
      setWhichTurn={setWhichTurn}
      checkWin={checkWin}
    />)
  }

  useEffect(() => {
    if (numOfMoves === 9 || gameWon === true) { // this is essentially 'game complete'
      bottomTextArea.textContent = 'Click or tap \'Clear\' to start a new game!'
      // 1. disable all boxes handlers even if they are blank
    }
    if (numOfMoves === 9 && gameWon === false) {
      winArea.textContent = 'It\'s a draw';
    };
  }, [bottomTextArea, gameWon, numOfMoves, winArea]);

  const handleClear = () => {
    setClearBoard(true);
    winArea.textContent = '';
    bottomTextArea.textContent = 'Click or tap on the above board to play a move!';
  }

  return (
    <div className="App">
      <p className='section-title'>Tic Tac Toe</p>
      <div className='board-area'>
        <div className='board-left'></div>
        <div className='board-main'>
          <div className='board'>
           {squares.map((square) => square)}
           {console.log('this is the squares', squares)}
          </div>
        </div>
        <div className='board-right'>
          <p id='win'></p>
        </div>
      </div>
      <div className='instruction-area'>
        <div id='left-child'></div>
        <div id='next-message'>
          Next move: <span id='current-turn'>{whichTurn}</span>
        </div>
        <div className='btn'>
          <button id='clear' onClick={handleClear}>Clear</button>
        </div>
      </div>
      <p className='under-text' id='click-or-tap'>
        Click or tap on the above board to play a move!
      </p>
    </div>
  );
}

export default App;
