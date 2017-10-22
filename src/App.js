import React, { Component } from 'react';
import Timeline from './components/timeline';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
          <h1>David Linke</h1>
          <h2>Web Designer and Developer.</h2>
          <p>This is the new home of all the things I am proud of having built.</p>
          <Timeline></Timeline>
      </main>
    );
  }
}

export default App;
