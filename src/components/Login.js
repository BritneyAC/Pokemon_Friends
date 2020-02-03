import React, {useState} from "react";

function Login(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(event){
    const {name, value} = event.target;
    if(name === "username"){
      setUsername(value);
    } else if(name === "password"){
      setPassword(value);
    }
  }

  return(
    <div>
      <form>
        <label for="username">Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
          minLength="3"
          maxLength="16"
          required
        >
        </input>
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          minLength="3"
          maxLength="16"
          required
        >
        </input>
        <button>Login</button>
      </form>
    </div>
  )
};

export default Login;