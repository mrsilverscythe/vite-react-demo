import React from 'react'

const deleteItem = (list, setList, index) => {
  const l = list;
  l.splice(index, 1)
  setList([...l])
  console.log(index);
}

const Item = ({ item, index, setDescription, css, list, setList }) => {
  return (
    <a className={`item ${css}`} onClick={() => setDescription(item.desc)}>

      <div className="ui mini red left label" onClick={() => deleteItem(list, setList, index)}>x</div>
      <h1 className={`ui header ${css}`}>  {item.name}</h1>

    </a>
  )
}

export default Item
