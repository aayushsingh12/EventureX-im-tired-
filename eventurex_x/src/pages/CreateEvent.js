import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateEvent() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const navigate=useNavigate()

  const handleCreateEvent=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/create", {name,description,date})
    .then(result=>{console.log(result)
      navigate('/join')
    })
    .catch(err=>console.log(err))
}

  return (
    <div style={styles.container}>
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent} style={styles.form}>
        <label>Event Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ ...styles.input, height: '100px' }}
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Create Event</button>
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
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

export default CreateEvent;