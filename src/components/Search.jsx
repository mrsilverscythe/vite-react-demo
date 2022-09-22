import React, { useEffect, useState } from "react";
import axios from "axios"
import Anime from "./Anime";

const Search = ({ css }) => {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [post, setPost] = useState({})
  let page = []
  if (post.length) { page = post.map((item) => <div key={item.mal_id}> <Anime item={item} css={css} /></div >) }
  else { }
  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime', {
      params: {
        q: search,
        limit: 20
      }
    }).then((res => {
      setPost(res.data.data)
    }))
  }, [query])



  return <div className={`ui`}>
    <form onSubmit={(e) => { e.preventDefault(); setQuery(search) }}>
      <div className={`ui ${css} segment`}>
        <div className={`ui ${css} transparent fluid icon input`}>
          <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit" className={`ui ${css} button`} > <i className="search icon"></i></button>
        </div>
      </div>
    </form >
    <div className="ui grid"> {page}</div>
  </div >;
};

export default Search;
