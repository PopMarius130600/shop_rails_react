import React from 'react';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";


const LogIn = (props) => {
  let navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = event => { 
    const user = {
      email: email,
      password: password
    }
    props.getUser(user);
    navigate("../", { replace: true});
    event.preventDefault();
    event.stopPropagation();
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <h3>Login</h3>

      <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" 
            value={email} onChange={handleEmail}/>
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" 
            value={password} onChange={handlePassword}/>
      </div>

      <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
    </form>
  )
};

export default LogIn;