import React from "react";
import {Link} from "react-router-dom";


function NavMenu(){
  return(
    <div className="NavMenu">
      <Link to="/"><h1>Pokemon Friends</h1></Link>
      <Link to="/messages"><Messages /></Link>
      <Link to="/menu"><i class="ri-menu-line"></i></Link>
    </div>
  )
};

export default NavMenu;