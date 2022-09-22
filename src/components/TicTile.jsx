import React from 'react'
import "./css/Tile.css";

const fillTile = (tile, css, turn, setTurn) => {

  if (tile.XO === "O") {
    return <i className={`circle outline massive icon ${css}`}></i>
  } if (tile.XO === "X") {
    return <i className={`x massive icon ${css}`}></i>
  } else return
}

const changeTile = (tile, turn, board, setBoard, index) => {
  if (tile.isEmpty) {
    const temp = board
    const newTile = { id: index + 1, isEmpty: false, XO: turn }
    temp.splice(index, 1, newTile)
    setBoard([...temp])
  }
}

const TicTile = ({ tile, css, turn, board, setBoard, index }) => {
  return (
    <div className='tic-grid-tile' onClick={() => changeTile(tile, turn, board, setBoard, index)}>{fillTile(tile, css)}
    </div>
  )
}

export default TicTile
