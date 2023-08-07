import React from 'react';

const Login = ({ login }) => {
  return (
    <div>
      {login ? <h1>Welcome</h1> : <h1>Please Log In</h1>}
    </div>
  );
};

export default Login;