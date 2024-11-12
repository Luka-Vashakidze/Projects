import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import Header from "./MainHeader";
import { AuthContext } from "./context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const authcontext = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const HandlerSubmit = (e) => {
    e.preventDefault();
    const user = result.find(
      (user) => user.username === username && user.email === email
    );
    if (user) {
      authcontext.setAuth(true);
      authcontext.Login(username);
      navigate("/home");
    } else {
      setError("Username or email is incorrect.");
    }
  };

  return (
    <>
      <div className="main">
        <Header />
        <div className="background">
          <form onSubmit={HandlerSubmit}>
            <h3>Login</h3>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              id="username"
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <label htmlFor="password">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              id="password"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />

            <h3 className="loginErrorText">{error}</h3>

            <button type="submit" className="Button">
              Log In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
