import React, { Component } from 'react';
import Timeline from './components/timeline';
import * as lang from './structures/languages';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
          <h1>{lang.write('myName')}</h1>
          <h2>{lang.write('myTitle')}</h2>
          <p>{lang.write('salutation')}</p>
          <Timeline></Timeline>
      </main>
    );
  }
}

export default App;
