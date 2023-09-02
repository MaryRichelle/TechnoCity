import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from './context/CartContext';
import OffersContext from "./context/OffersContext"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OffersContext>
      <Context>
        <App />
      </Context>
    </OffersContext>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
