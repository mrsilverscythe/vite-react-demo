import React from "react";

const HomePage = ({ css }) => {
  return <div className="ui relaxed divided list container">

    <div className="item">
      <i className={`at ${css} icon large`}></i>
      <div className="content">
        <a className="header">sbouisalim@gmail.com</a>
      </div>
    </div>
    <div className="item">
      <i className={`phone ${css} icon large`}></i>
      <div className="content">
        <a className="header">0021628681635</a>
      </div>
    </div>
    <div className="item">
      <i className={`facebook ${css} icon large`}></i>
      <div className="content">
        <a className="header" href="https://www.facebook.com/sbouib15/">https://www.facebook.com/sbouib15/</a>
      </div>
    </div>

  </div >;
};

export default HomePage;
