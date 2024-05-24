import { useState } from "react"
import './App.css'

function Square() {
  const [value, setValue] = useState(null)

  function handleClick() {
    setValue('X');
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <div className="board">
      <div className="board-row">
        <Square className="square" />
        <Square className="square" />
        <Square className="square" />
      </div>
      <div className="board-row">
        <Square className="square" />
        <Square className="square" />
        <Square className="square" />
      </div>
      <div className="board-row">
        <Square className="square" />
        <Square className="square" />
        <Square className="square" />
      </div>
    </div>
  )
}