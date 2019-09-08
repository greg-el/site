import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import './index.css'


const summary = "Hi. My name is Greg and I'm a hobbiest programmer. I'm interested in things front/end/arduino related."





  

const About = () => 
  <div className="main">
    <h1>About me</h1>
    <p>{ summary }</p>
    <Link />
  </div>
  
const Link = () =>
  <div className="links">
    <a className="git" href="https://www.github.com/greg-el/">git</a>
    <a className="linkedin" href="https://www.linkedin.com/in/gregory-leonard-ab3bbb191/">linkedin</a>
  </div>


ReactDOM.render(
  <About />,

  document.getElementById('root')
)




export default App;
