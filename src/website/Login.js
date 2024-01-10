import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call, form validation)
    console.log('Login Data Submitted:', loginData);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function login(event) {
    event.preventDefault();
    try {
      const res=await axios.post("http://localhost:9090/api/v1/employee/login", {
        username: username,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message == "username not exits") {
          alert("username not exits");
        }
        else if (res.data.message == "Login Success") {

          navigate('/index',{state: {username:res.data.username}});
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }

    catch (err) {
      alert(err);
    }

  }

  return (
    <div className="App">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" class="form-control" id="username" placeholder="Enter Name"

            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input type="password" class="form-control" id="password" placeholder="Enter password"

            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}

          />
        </label>
        <br />
        <button  type="submit" onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
