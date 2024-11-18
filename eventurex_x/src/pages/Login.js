import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/login", {email,password})
        .then(result=>{
          console.log(result)
          if(result.data.message==="Success"){
            navigate('/home')
          }
        })
        .catch(err=>console.log(err))
    }

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={styles.input}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
          style={styles.input}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button style={styles.button}>Login</button>
        </form>
     
      
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;
