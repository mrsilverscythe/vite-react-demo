import React, { useState } from 'react'
import uuid from "react-uuid";

const AddArticle = (title, desc, list, setList, setTitle, setDesc) => {
  if (title.length && desc.length) {
    const New = { id: uuid(), name: title, desc }
    const l = ([New]).concat(list)
    setList([...l])
    setTitle("")
    setDesc("")
  }
}


const Additem = ({ css, list, setList }) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  return (
    < div className='ui container' style={{ marginTop: "100px" }}>
      <div className={`ui segment ${css}`}>
        <div className={`ui form ${css}`} >
          <div className="two fields ">
            <div className="field ">
              <label>Title</label>
              <input placeholder="Title" autoComplete='off' value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="field">
              <label>Article</label>
              <input placeholder="Article" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
          </div>
          <div className="inline field">
          </div>
          <div className={`ui submit button ${css} `} onClick={() => AddArticle(title, desc, list, setList, setTitle, setDesc)}>Add Article</div>
          <div className={`ui submit button ${css} `} onClick={() => setList([])}>Delete All</div>
        </div>
      </div></div >
  )
}

export default Additem
