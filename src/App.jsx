import './App.css';
import React, { useState } from 'react';
import Square from './Square';
// import { useEffect } from 'react/cjs/react.development';

function App() {
  // const winArea = document.getElementById('win');
  const bottomTextArea = document.getElementById('click-or-tap');
  // console.log('bottomTextArea', bottomTextArea);
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
    const rows = [0, 0, 0];          //* Individual indexes represent entire row
    const columns = [0, 0, 0];       //** " " column
    const rightDiagonal = [0, 0, 0]; //*** Diagonal indexes represent
    const leftDiagonal = [0, 0, 0];  //    INDIVIDUAL BOXES
  };

  const squares = [];
  for (let i = 0; i < 9; i += 1) {
    squares.push(<Square
      key={i}
      id={i}
      coordinates={[Math.floor(i / 3), (i % 3)]}
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

  // useEffect(() => {
  //   if (numOfMoves === 9 || gameWon === true) { // this is essentially 'game complete'
  //     // 1. disable all boxes handlers even if they are blank
  //   }
  // }, [bottomTextArea, gameWon, numOfMoves, winArea]);

  const handleClear = () => {
    setClearBoard(true);
    setNumOfMoves(0);
  }

  return (
    <div className="App">
      <p className='section-title'>Tic Tac Toe</p>
      <div className='board-area'>
        <div className='board-left'></div>
        <div className='board-main'>
          <div className='board'>
           {squares.map((square) => square)}
          </div>
        </div>
        <div className='board-right'>
          <p id='win'>
            {
              (
                numOfMoves === 9 || gameWon === true
                ? numOfMoves === 9 && gameWon === false
                  ? 'it\'s a draw!'
                  : gameWon
                    ? `${whichTurn === 'O' ? 'X' : 'O'} wins!`
                    : ''
                : ''
              )
            }
          </p>
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
        {
          (
            numOfMoves === 9 || gameWon
            ? 'Click or tap clear to start a new game!'
            : 'Click or tap on the above board to play a move!'
          )
        }
      </p>
    </div>
  );
}

export default App;
