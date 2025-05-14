import { useState } from "react";
const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, update] = useState("");
  const ProceedLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};
export default Login;
