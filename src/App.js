import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greetings from './components/views/Greetings';
import Home from './components/views/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<Greetings />} />
      </Routes>
    </>
  );
}

export default App;
