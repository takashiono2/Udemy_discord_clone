import React from 'react';
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebarleft */}
      <div className="sidebarLeft">
        <div className="sidebarIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="sidebarIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      {/* sidebarright */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
