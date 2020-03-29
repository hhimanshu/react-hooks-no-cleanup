import React, { Component } from 'react';
import { render } from 'react-dom';
import GitHub from './GitHub';
import './style.css';

class App extends Component {
  render() {
    return <GitHub/>
  }
}

render(<App />, document.getElementById('root'));
