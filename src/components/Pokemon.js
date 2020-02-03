import React from "react";

function Pokemon(props){
  return(
    <div className="Pokemon">
      <h3>{props.Pokemon.username}</h3>
    </div>
  )
};

export default Pokemon;