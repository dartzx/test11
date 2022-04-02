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
      <a href = "/home">
          Click to go to home page!
      </a>
      <a href ="/">
        Click here to return to the sign up page
    </a>
    </div>
  );
}

export default App;