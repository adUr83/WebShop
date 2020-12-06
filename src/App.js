import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Router from './Components/Router';
import Footers from './Components/Footer';

function App() {
  return (
    <div className="App">
 
     <NavBar/>
     <Router/>
     <Footers/>

    </div>
  );
}

export default App;
