// src/pages/JoinEvent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JoinEvent.css';

function JoinEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Replace this line with your MongoDB API call in the future
        // const response = await axios.get('http://localhost:5000/events'); 
        // Hardcoded events for now
        const exampleEvents = [
          {
            _id: '1',
            name: 'Tech Conference 2024',
            description: 'A conference focusing on the latest in tech and innovation.',
            date: '2024-12-01',
          },
          {
            _id: '2',
            name: 'Web Development Workshop',
            description: 'An intensive workshop covering modern web development practices.',
            date: '2024-12-10',
          },
          {
            _id: '3',
            name: 'Startup Networking Night',
            description: 'An opportunity to meet and connect with startup enthusiasts.',
            date: '2024-12-15',
          },
        ];
        
        setEvents(exampleEvents); // Use fetched events in the future
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const joinEvent = async (eventId) => {
    try {
      // You will post to the backend to join the event in the future
      // await axios.post(http://localhost:5000/events/join/${eventId});
      //alert(You've successfully joined the event with ID: ${eventId});
    } catch (error) {
      console.error('Error joining event:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Join an Event!</h1>
      <ul className='events' >
        {events.map((event) => (
          <li key={event._id} >
            <div className="event-card">
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <button className='join-button' onClick={() => joinEvent(event._id)}>Join Event</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JoinEvent;
