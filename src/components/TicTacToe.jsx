import React, { useState, useEffect } from 'react'
import TicTile from './TicTile'
import "./css/Tile.css";


const resetBoard = () => {
  return ([{ id: 1, isEmpty: true, XO: "-" }, { id: 2, isEmpty: true, XO: "-" }, { id: 3, isEmpty: true, XO: "-" }, { id: 4, isEmpty: true, XO: "-" }, { id: 5, isEmpty: true, XO: "-" }, { id: 6, isEmpty: true, XO: "-" }, { id: 7, isEmpty: true, XO: "-" }, { id: 8, isEmpty: true, XO: "-" }, { id: 9, isEmpty: true, XO: "-" }])
}


const TicTacToe = ({ css }) => {
  const [board, setBoard] = useState([...resetBoard()])
  const [turn, setTurn] = useState("X")

  let show = board.map((tile, index) => <div key={tile.id}>
    <TicTile tile={tile} css={css} turn={turn} board={board} setBoard={setBoard} index={index} /></div>)



  useEffect(() => {
    if ((board[0].XO === "X" || board[0].XO === "O") && board[0].XO === board[3].XO && board[0].XO === board[6].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[0].XO}`)
        setBoard(resetBoard())
      }, 200)
    }
    if ((board[1].XO === "X" || board[1].XO === "O") && board[1].XO === board[4].XO && board[1].XO === board[7].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[1].XO}`)
        setBoard(resetBoard())
      }, 200)
    }
    if ((board[2].XO === "X" || board[2].XO === "O") && board[2].XO === board[5].XO && board[2].XO === board[8].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[2].XO}`)
        setBoard(resetBoard())
      }, 200)
    }
    if ((board[0].XO === "X" || board[0].XO === "O") && board[0].XO === board[1].XO && board[0].XO === board[2].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[0].XO}`)
        setBoard(resetBoard())
      }, 200)
    }
    if ((board[3].XO === "X" || board[3].XO === "O") && board[3].XO === board[4].XO && board[3].XO === board[5].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[3].XO}`)
        setBoard(resetBoard())
      }, 200)
    }
    if ((board[6].XO === "X" || board[6].XO === "O") && board[6].XO === board[7].XO && board[6].XO === board[8].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[6].XO}`)
        setBoard(resetBoard())
      }, 200)
    }
    if ((board[0].XO === "X" || board[0].XO === "O") && board[0].XO === board[4].XO && board[0].XO === board[8].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[0].XO}`)
        setBoard(resetBoard())
      }, 200)
    } if ((board[2].XO === "X" || board[2].XO === "O") && board[2].XO === board[4].XO && board[2].XO === board[6].XO) {
      setTimeout(() => {
        alert(`Winner!!! \n${board[2].XO}`)
        setBoard(resetBoard())
      }, 200)
    }
    if (turn === "X") {
      setTurn("O")
    } else { setTurn("X") }
  }, [board]);
  return (<div>
    <div className={`ui ${css} segment`}>
      <h1 className={`ui center aligned icon header ${css} `}>
        Tic Tac Toe</h1>
    </div>
    <div className='tic-grid-container'>{show}</div>
    <div className={`ui ${css} segment`}>
      <h1 className={`ui center aligned icon header ${css} `}>
        {turn}<br />
        <button className={`  ui  center aligned ${css} button`} onClick={() => setBoard(resetBoard())}>
          Reset
        </button>
      </h1>
    </div>
  </div>
  )
}

export default TicTacToe
