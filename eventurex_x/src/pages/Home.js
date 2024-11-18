// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'

function Home() {
  

  return (
    <div>
      <h1>Events Near You!</h1>
      <li>
            <h2>TEST EVENT NAME</h2>
            <p>TEST EVENT DESC</p>
            <p>Date: TEST EVENT DATE</p>
          </li>
    </div>
  );
}

export default Home;
