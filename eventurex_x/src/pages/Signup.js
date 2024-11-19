import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/register", {name, email,password})
        .then(result=>{console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          style={styles.input}
          onChange={(e)=> setName(e.target.value)}
        />
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
        <button style={styles.button}>Register</button>
        </form>
        <h3>Already have an account? </h3><center>
        <Link to="/login" style={styles.linkButton}> Login </Link></center>
      
    </div>
  );
}

const styles = {
    
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#28A745',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#218838',
      transform: 'scale(1.05)',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
      fontSize: '28px',
      fontWeight: '600',
    },
    link: {
      textAlign: 'center',
      marginTop: '20px',
    },
    linkButton: {
      color: '#007BFF',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
    },
  };
  
  export default Signup;
  