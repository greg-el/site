import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

const title = React.createElement(
  "h1",
  { id: "title", title: "This is a title." },
  "About me"
)

ReactDOM.render(
  title,
  document.getElementById('root')
)


export default App;
