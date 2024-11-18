// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  

  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome, TESTNAME</h2>
      <p>Email: TESTEMAIL</p>

      <h2>Events You've Joined</h2>

      
      <h1>Dashboard</h1>
      <h2>Joined Events</h2>
      <ul>
       
          <li >
            <h2>TESTEVENTNAME</h2>
            <p>TESTEVENTDESCRIPTION</p>
            <p>Date: TEST EVENT DATE</p>
          </li>
        
      </ul>

      <h2>Created Events</h2>
      <ul>
        
          <li>
            <h2>TEST EVENT NAME</h2>
            <p>TEST EVENT DESC</p>
            <p>Date: TEST EVENT DATE</p>
          </li>
        
      </ul>
    </div>
  );
}

export default Dashboard;
