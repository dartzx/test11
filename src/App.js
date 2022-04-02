import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <h2>Login in to Google!</h2>
      <Login />
      <Logout />
    </div>
  );
}

export default App;