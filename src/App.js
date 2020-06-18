import React from 'react';
import useOnlineStatus from '@rehooks/online-status';
import './App.css';

function App() {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="App">
      <h3>React Network Status</h3>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default App;
