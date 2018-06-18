import React, { Component } from 'react';
import './App.css';
import avengers from './avengers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Some avengers</h1>
        </header>
        <ul>
        {avengers.map((avenger) => {
          return (
            <li key={avenger.name}> Name: {avenger.name}, Ability: {avenger.ability}</li>
          );
        })
        }
        </ul>
      </div>
    );
  }
}

export default App;
