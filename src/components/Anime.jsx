import React from 'react'
const Anime = ({ item, css }) => {
  return (
    <div className={`ui ${css} four column`} style={{ marginTop: "60px", }}>
      <div className="ui link cards">
        <div className="fluid card">
          <div><a href={item.trailer.url}>
            <img src={item.images.webp.large_image_url
            } width="290" height="300" />
          </a>
          </div>
          <div className="content">
            <div className="header"> <a href={item.url}>  {item.title}</a></div>
            <div className="meta">
              <a href={item.url}>
                {item.title_english}
              </a>
            </div>
            <div className="description">
              {item.rating}
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              {item.year}
            </span>
            <span>
              <i className="user icon"></i>
              {item.popularity}
            </span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Anime
