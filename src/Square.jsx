import React, { useEffect } from 'react';

const Square = (props) => {
  const {
    numOfMoves,
    setNumOfMoves,
    squaresContents,
    setSquaresContents,
    clearBoard,
    setClearBoard,
    id
  } = props;

  const handleClick = () => {
    setNumOfMoves(numOfMoves + 1);
    if (squaresContents[id] === '') {
      const { whichTurn, setWhichTurn } = props;
      const newSquaresContents = [];
      for (let i = 0; i < 9; i += 1) {
        if (id === i) {
          newSquaresContents.push(whichTurn);
        } else {
          newSquaresContents.push(squaresContents[i]);
        }
      }
      setSquaresContents(newSquaresContents);
      setWhichTurn(whichTurn === 'O' ? 'X' : 'O');
    }
  };

  useEffect(() => {
    const blankBoardArray = [];
    for (let i = 0; i < 9; i += 1) {
      blankBoardArray.push('');
    }
    setSquaresContents(blankBoardArray);
    setNumOfMoves(0);
    setClearBoard(false);
  }, [clearBoard, setClearBoard, setNumOfMoves, setSquaresContents])

  return (
    <div className='board-square' onClick={handleClick}>
      <div className='square-contents'>{squaresContents[id]}</div>
    </div>
  )
}

export default Square;




// React {
//   useState: function(whatever) {does something},
//   useEffect: function(something) {does something else}
// }

// props {
//   clearBoard: (the clearBoard state)
//   setClearBoard: (the setClearBoard function)
// }