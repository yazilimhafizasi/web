import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Team from './pages/Team';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Posts" element={<Posts />} />
          <Route path="Team" element={<Team />} />

      </Routes>
    </BrowserRouter>
)
