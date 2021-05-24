import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// DOM manipulation

// input focused event
const inputs = [...document.querySelectorAll('.text-input')];

inputs.forEach(input => {
  input.addEventListener('focus', event => {
    event.target.classList.add('text-input-focused')
  })

  input.addEventListener('blur', event => {
    !event.target.value && event.target.classList.remove('text-input-focused')
  })
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
