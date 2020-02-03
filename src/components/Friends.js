import React, {useState} from "react";
import {Link} from "react-router-dom";

function Friends(props){
  const [usernameInput, setUsernameInput] = useState("");

  function handleChange(event){
    const {value} = event.target;
    setUsernameInput(value);
  }

  const friendsList = props.map(friend => {return(
    <div>
      <Link to={`/user/${friend.username}`}><h3>{friend.username}</h3></Link>
    </div>
  )});

  return(
    <div>
      <h1>Add a friend by username</h1>

      <form>
        <input 
          type="text" 
          required 
          onChange={handleChange} 
          value={usernameInput}
        >
        </input>
        <button>Add Friend</button>
      </form>

      <hr />
      <h1>Your friends list</h1>
      {friendsList}
    </div>
  )
};

export default Friends;