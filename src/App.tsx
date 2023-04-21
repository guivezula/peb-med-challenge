import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Offer from './pages/offer/Offer';
import Success from './pages/success/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Offer />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
