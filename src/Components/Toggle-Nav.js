import { useState } from "react";
import "../CSS/toggle-nav.css"
import icons from "../Utilities/Icons/icons";

const ToggleSidebar = ({isOpen,setIsopen}) => {

    // const Toggle = () => {
    //     isOpen === true ? setIsopen(false) : setIsopen(true);
    // }
    return (
        <>
<div id="mySidebar" className={`sidebar ${isOpen? "toggleclass":""}`}>
  <div className="left-content flex" id="navbarNavDropdown">
            <div>
                <img onClick={()=>setIsopen(false)} className='toggle-img' src={icons.menublack} alt="" />
            </div>
           <div className="logo-nav" href="#">
            CA Society
          </div>
          </div>
          <a href="#">Manage Organization</a>
          <a href="#">Administration Setting</a>
          <a href="#">Prefrences</a>
</div>
        </>
    )
}

export default ToggleSidebar;