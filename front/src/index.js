import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accueil from "./pages/Acceuil";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
