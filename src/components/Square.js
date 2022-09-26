import React from 'react'

const Square = ({ squares, index, handleGamePlay }) => {
  const handleClick = () => { handleGamePlay(index) }
  return (
    <div className="square" onClick={handleClick}>{squares}</div>
  )
}
export default Square
