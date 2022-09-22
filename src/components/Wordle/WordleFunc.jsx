import React from 'react'
import list from './Words.json';
import uuid from "react-uuid";


const CompareCharacters = ({ chr, word, index }) => {
  for (let i = 0; i < word.length; i++) {
    if (chr === word[i] && i === index) {
      return <span style={{ color: "green" }}>{chr}</span>;
    } else if (chr === word[i]) {
      return <span style={{ color: "orange" }}>{chr}</span>;
    }
  }
  return <span style={{ color: "red" }}>{chr}</span>;
};
const CompareWords = (word, rightWord) => {
  let List = [];
  if (word === rightWord) return <span className="green">{word}</span>;
  for (let i = 0; i < word.length; i++) List.push(word[i]);
  return List.map((x, f) => (
    <CompareCharacters
      index={f}
      chr={x}
      word={rightWord}
      key={uuid()}
    />
  ));
};


const WordleFunc = (correctWord, setCorrectWord, guess, setGuess, tries, setTries, oldTries, setOldTries, setVisibleWord, error, setError, wordObj, setWordObj) => {
  if (guess === correctWord) {
    alert(`You Won!!!\nthe right word was ${correctWord}`)
    Reset(correctWord, setCorrectWord, setTries, setOldTries, setVisibleWord, setGuess, setError, error, setWordObj)
    return
  }

  if (guess.length !== correctWord.length && guess.length !== 0) setError(true)
  if (guess.length === correctWord.length && tries > 0) {
    setWordObj(CompareWords(guess, correctWord))
    let newArray = oldTries
    setTries(tries - 1)
    setOldTries([guess].concat(newArray))
    setGuess("")
  } else if (tries === 0) {
    alert(`You Lost!!!\nthe right word was ${correctWord}`)
    Reset(correctWord, setCorrectWord, setTries, setOldTries, setVisibleWord, setGuess, setError, error, setWordObj)
  }
}
const Reset = (correctWord, setCorrectWord, setTries, setOldTries, setVisibleWord, setGuess, setError, error, setWordObj) => {
  setCorrectWord((list[Math.floor(Math.random() * list.length)]))
  setVisibleWord(makeBlank(correctWord))
  setTries(correctWord.length + 2)
  setGuess("")
  setOldTries([])
  setError(false)
  setWordObj([])

}

const makeBlank = (cWord) => {
  let newWord = ""
  for (let i = 0; i < cWord.length; i++) {
    newWord = newWord + '-'
  }
  return newWord

}
export { makeBlank, WordleFunc, Reset }
