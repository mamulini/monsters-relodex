import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  async apiCall() {
    let res = await fetch('')
  }

  render() {

    return (
      <div div className="App" >
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name.toUpperCase()}</h1>)
        }
      </div >

    )

  }
}

export default App;
