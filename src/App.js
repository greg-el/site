import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';


const summary = "Hi. My name is Greg and I'm a hobbiest programmer. I'm interested in things front/end/arduino related."

function About() {
  return (
    <body>
      <h1>About me</h1>
      <p>{ summary }</p>
    </body>
  )
}


ReactDOM.render(
  main,
  document.getElementById('root')
)




export default App;
