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


const url = "https://jsonplaceholder.typicode.com/posts"

function getUser() {
  axios.get(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Erro na requisição GET:', error);
    });
}

getUser()


