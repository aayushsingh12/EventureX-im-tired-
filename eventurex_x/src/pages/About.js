// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <center>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.text}>
          Welcome to <span style={styles.textBlue}>EventureX</span>! We are dedicated to providing a platform that brings people together through shared interests and experiences.
        </p>
        <p style={styles.text}>
          Here, you can join events, create events, and register for events!
        </p>
        <p style={styles.text}>
          Don't have a team for events? No worries! <span style={styles.textBlue}>EventureX</span> connects you to like-minded individuals, where you can talk and explore ideas for Hackathons, Ideathons, fests, etc!
        </p>
        
        <h2 style={styles.subheading}>Website Makers</h2>
        
        <div style={styles.teamMember}>
          <p style={styles.textBlue}><strong>Aayush Singh</strong></p>
          <p style={styles.text}>Worked on the backend of the project. Set up MongoDB and ExpressJS for the website!</p>
        </div>

        <div style={styles.teamMember}>
          <p style={styles.textBlue}><strong>A.V Vedanth</strong></p>
          <p style={styles.text}>Worked on the frontend and the styling of the website!</p>
        </div>

        <div style={styles.teamMember}>
          <p style={styles.textBlue}><strong>Abhinav Ballal</strong></p>
          <p style={styles.text}>Worked on the routing of all the pages and contributed to the 'Create Event' mechanism.</p>
        </div>
      </center>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#2c3e50', // Dark background for contrast
    color: '#fff', // White text color
    padding: '60px 20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#3498db', // Blue for heading
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#3498db', // Blue for subheading
    marginBottom: '20px',
    marginTop: '40px',
  },
  text: {
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '20px',
    lineHeight: '1.6',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  textBlue: {
    fontSize: '18px',
    color: '#3498db', // Blue for names and important text
    fontFamily: 'Arial, sans-serif',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  teamMember: {
    marginBottom: '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
};

export default About;
