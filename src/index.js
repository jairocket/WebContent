import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//AXIOS //

// Fazendo uma requisição GET
axios.get('https:/jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na requisição GET:', error);
  });

// Fazendo uma requisição POST
axios.post('https://api.example.com/data', {
    key1: 'value1',
    key2: 'value2'
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na requisição POST:', error);
  });
