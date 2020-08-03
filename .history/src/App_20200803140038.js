import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'frankie', id: '1' },
        { name: 'dracula', id: '2' },
        { name: 'zombie', id: '3' }
      ]
    }
  }

  render() {

    return (
      <div div className="App" >
        {
          this.state.monsters.map(monster => <h1>{monster.name.toUpperCase()}</h1>)
        }
      </div >

    )

  }
}

export default App;
