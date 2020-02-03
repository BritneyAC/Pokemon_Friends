import React from "react";
import {Link} from "react-router-dom";

function Menu(props){
  return(
    <div>
      <Link to="/friends"><h3>Friends</h3></Link>
      <Link to="/account"><h3>Account</h3></Link>
      <Link to="/sign-out"><h3>Sign Out</h3></Link>
    </div>
  )
};

export default Menu;