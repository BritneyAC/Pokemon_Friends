import React from "react";

function SignUp(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChange(event){
    const {name, value} = event.target;
    if(name === "username"){
      setUsername(value);
    } else if(name === "password"){
      setPassword(value);
    } else if(name === "confirmPassword"){
      setConfirmPassword(value);
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
        <label for="confirmPassword">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          minLength="3"
          maxLength="16"
          required
        >
        </input>
        <button>Sign Up</button>
      </form>
    </div>
  )
};

export default SignUp;