import React from 'react';

const Login = () => (
  <div className="login">
    <h3> Login to your account!</h3>
    <input placeholder="Username" name="username" type="text" />
    <input placeholder="Password" name="password" type="text" />
    <br/>
    <a href={process.env.REACT_APP_LOGIN}>
      <button> Login </button>
    </a>
  </div>
)


export default Login;
