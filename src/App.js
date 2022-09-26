import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);

  const handleGamePlay = (index) => {
    let updateBoard = [...squares];

    if (
      turn % 2 === 0 &&
      updateBoard[index] !== "🎃" &&
      updateBoard[index] !== "🎄"
    ) {
      updateBoard[index] = "🎃";
      setSquares(updateBoard);
      setTurn(turn + 1);
    } else if (
      turn % 2 !== 0 &&
      updateBoard[index] !== "🎃" &&
      updateBoard[index] !== "🎄"
    ) {
      updateBoard[index] = "🎄";
      setSquares(updateBoard);
      setTurn(turn + 1);
    }
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return alert("You Win!");
      }
    }

    console.log(index);
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game_container">
        {squares.map((squares, index) => {
          return (
            <Square
              squares={squares}
              handleGamePlay={handleGamePlay}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
