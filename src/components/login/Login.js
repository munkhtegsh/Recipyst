import React from 'react';

const Login = () => (
  <div className="login">
  <h3> Login to your account!</h3>
    <div className="login_container">
      <input placeholder="Username" name="username" type="text" />
      <input placeholder="Password" name="password" type="text" />
      <a href={process.env.REACT_APP_LOGIN}>
        <button className="login__button"> Login </button>
      </a>      
    </div>
  </div>
)

export default Login;

