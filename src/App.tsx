import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Offer from './pages/offer/Offer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Offer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
