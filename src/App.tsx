import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <div >
           
          <Route path='/'>
            <Login />
          </Route>
          
          <Route path='/Login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>
        </div>
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
