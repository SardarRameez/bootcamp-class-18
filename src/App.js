import React from 'react';
import {initNotification} from './Services/firebaseService'
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Hello World</h3>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
