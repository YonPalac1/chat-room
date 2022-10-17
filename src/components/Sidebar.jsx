import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import { useState } from "react";

const Sidebar = () => {
  const [showMsg, setShowMsg] = useState(false);

  const handleMsg = () => {
    setShowMsg(!showMsg);
  }

  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
      <span className="warning" onMouseOver={handleMsg} onMouseOut={handleMsg}>!</span>
      {
        showMsg &&
        <p className="msg">Buscame como YONATANDEV y dejame un msg!!!</p>
      }
    </div>
  );
};

export default Sidebar;