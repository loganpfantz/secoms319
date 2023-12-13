import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import CarShop from "./GameSpace.js"
import "./cover.css";
import './details-page.css';
//import "./productPage.css";
import "./style.css";
import "./overall.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarShop />
  </React.StrictMode>
);

