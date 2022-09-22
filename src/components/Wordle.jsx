import React, { useState } from 'react'
import list from './Wordle/Words.json';
import uuid from "react-uuid";
import { makeBlank, WordleFunc, Reset } from "./Wordle/WordleFunc";

const Wordle = ({ css }) => {
  const [correctWord, setCorrectWord] = useState(list[Math.floor(Math.random() * list.length)]);
  const [visibleWord, setVisibleWord] = useState(makeBlank(correctWord));
  const [wordObj, setWordObj] = useState({});
  const [guess, setGuess] = useState("")
  const [oldTries, setOldTries] = useState([])
  const [tries, setTries] = useState(correctWord.length + 2)
  const [error, setError] = useState(false)
  const css2 = error ? "red" : ""
  const css3 = error ? "error" : ""
  const history = oldTries.map(Trie => <div key={uuid()} className="ui segments">
    <div className={`ui ${css} segment`}>
      {Trie}
    </div>
  </div>)
  return (
    <form className='ui container'
      onSubmit={(e) => {
        e.preventDefault();
        WordleFunc(correctWord, setCorrectWord, guess, setGuess, tries, setTries, oldTries, setOldTries, setVisibleWord, error, setError, wordObj, setWordObj)
      }}>
      <h1 className={`ui center aligned icon header ${css} `}>{wordObj.length ? wordObj : visibleWord} </h1>
      <h3 className={`ui center aligned icon header ${css} `}>{tries}</h3>
      <div className={`ui ${css}  segment big ${css2} `}>
        <div className={`ui ${css} transparent fluid icon input ${css3} focus`}>
          <input autoFocus type="text" placeholder="Type your Guess" value={guess} onChange={(e) => { setError(false); setGuess(e.target.value) }} />
          <button type="submit" className={`ui ${css} button`}>Check</button>
          <button className={`ui ${css} button`}
            onClick={() => Reset(correctWord, setCorrectWord, setTries, setOldTries, setVisibleWord, setGuess, setError, error, setWordObj)}>
            Reset
          </button>
        </div>
        {history}
      </div>
    </form >
  )
}

export default Wordle
