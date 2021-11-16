import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
  <ul>
    <li>Hot Dogs</li>
    <li>Hamburgers</li>
    <li>Pizza</li>
    <li>Sushi</li>
  </ul>,
  // React.createElement('ul', 
  //   {style: { color: 'blue' }}, 
  //   React.createElement('li', null, 'Hot Dogs'),
  //   React.createElement('li', null, 'Hamburgers'),
  //   React.createElement('li', null, 'Pizza')
  // ),
  document.getElementById('root')
);


