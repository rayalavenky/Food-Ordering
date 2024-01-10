import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register () {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here (e.g., API call, form validation)
    console.log('Form Data Submitted:', formData);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9090/api/v1/employee/save", {
        username: username,
        email: email,
        password: password,
      });
      alert("Customer Registation Successfully");
      navigate("/login")
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="App">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Username:</h4>
          <input type="text"  class="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
          
        </label>
        <br />
        <label>
          <h4>Email:</h4>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
        </label>
        <br />
        <label>
          <h4>Password:</h4>
          <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          
        </label>
        <br />
        <button  type="submit" onClick={save}>Register</button>
      </form>
    </div>
  );
};

export default Register;
