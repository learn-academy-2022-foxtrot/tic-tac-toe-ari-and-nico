import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);

  const [firstPlayerMoves, setFirstPlayerMoves] = useState([]);
  const [secondPlayerMoves, setSecondPlayerMoves] = useState([]);

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

  const handleWin = () => {
    // We need to access each index of the wins array, which will be another array:
    // [0, 1, 2]
    // We want to compare the array playermoves to the index of wins

    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        alert("You win!");
      }
      // console.log("[a, b, c]");

      // If what playermoves contains is === to [a,b,c] in wins, then you win
    }
  };
  console.log(handleWin());

  const handleGamePlay = (index) => {
    let updateBoard = [...squares];

    if (
      turn % 2 === 0 &&
      updateBoard[index] !== "🎃" &&
      updateBoard[index] !== "🎄"
    ) {
      updateBoard[index] = "🎃";
      setSquares(updateBoard);
      setFirstPlayerMoves(firstPlayerMoves.concat(index));
      setTurn(turn + 1);
      handleWin();
      console.log("P1:", firstPlayerMoves);
    } else if (
      turn % 2 !== 0 &&
      updateBoard[index] !== "🎃" &&
      updateBoard[index] !== "🎄"
    ) {
      updateBoard[index] = "🎄";
      setSquares(updateBoard);
      setSecondPlayerMoves(secondPlayerMoves.concat(index));
      setTurn(turn + 1);
      handleWin();
      console.log("P2:", secondPlayerMoves);
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
