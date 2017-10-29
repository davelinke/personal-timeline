import React, { Component } from 'react';
import Timeline from './components/timeline';
import * as lang from './structures/languages';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div className="user-info">
            <h1 className="user-name"><span>{lang.write('myName')}</span></h1>
            <h2 className="user-tagline">{lang.write('myTitle')}</h2>
            <p className="user-description">{lang.write('salutation')}</p>
        </div>
        <Timeline></Timeline>
      </main>
    );
  }
}

export default App;
