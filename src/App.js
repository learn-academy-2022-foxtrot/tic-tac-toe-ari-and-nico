import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)

  const handleGamePlay = (index) => {
    let updateBoard = [...squares]
    setTurn(turn + 1)
    if (turn % 2 === 0 && updateBoard[index] !== "🎃" && updateBoard[index] !== "🎄") {
      updateBoard[index] = "🎃"
      setSquares(updateBoard)
    } else if (turn % 2 !== 0 && updateBoard[index] !== "🎃" && updateBoard[index] !== "🎄") {
      updateBoard[index] = "🎄"
      setSquares(updateBoard)
    }


    console.log(index)
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game_container">{squares.map((squares, index) => {
        return (
          <Square squares={squares} handleGamePlay={handleGamePlay} key={index} index={index} />
        )
      })}</div>

    </>
  )
}

export default App