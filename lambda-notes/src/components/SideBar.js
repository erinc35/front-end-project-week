import React from "react";
import "../App.css";
import { Link } from "react-router-dom";



const Sidebar = () => {
    return <div className="sidebar col-sm-3">
        <h2 className='sidebar-header'> Lambda<br/>Notes</h2>
        <Link to='/'><button className='mr-sm-2 ml-sm-3 mb-sm-3 sidebar-item pt-sm-1' href="#">View Your Notes</button></Link>
        <Link to='/create' ><button className='mr-sm-2 ml-sm-3 mb-sm-3 sidebar-item pt-sm-1' 
            href="#">+ Create New Note
        </button></Link>
      </div>;
}

export default Sidebar;