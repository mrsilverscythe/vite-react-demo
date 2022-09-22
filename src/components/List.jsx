import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import uuid from "react-uuid";
import Additem from './List/Additem';
import Item from './List/Item';

const List = ({ css }) => {
  const [list, setList] = useState([])
  useEffect(() => {
    if (localStorage.getItem("List")) {
      setList(JSON.parse(localStorage.getItem("List")));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(list));
  }, [list]);
  const [description, setDescription] = useState("")
  const showedList = list.map((item, index) => <div key={item.id}><Item item={item} index={index} setDescription={setDescription} css={css} list={list} setList={setList} /></div>)
  const text = (<div className={`twelve wide stretched column ${css}`}>
    <div className={`ui segment ${css} `}>
      {description}
    </div>
  </div>)
  return (
    <div>
      <div className={`ui ${css} grid`}>
        <div className={`four wide ${css} column`}>
          <div className={`${list.length && 'ui vertical fluid tabular menu'} ${css} `}>
            {!(list.length === 0) && showedList}
          </div>
        </div>
        {!(list.length === 0) && text}
      </div>
      <Additem css={css} list={list} setList={setList} />
    </div >
  )
}
export default List
