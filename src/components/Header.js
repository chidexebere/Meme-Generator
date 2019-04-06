import React from "react";
import "./css/header.css";
import Yao from "./images/Yao.png";

function Header() {
  return (
    <div>
      <header>
        <p> Build A Meme</p>
        <img
          //src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          src={Yao}
          alt="trollface"
        />
      </header>
    </div>
  );
}

export default Header;
