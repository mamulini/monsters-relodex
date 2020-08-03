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
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let result = await response.json();
    this.setState({ users: result });
  }

  render() {

    return (
      <div div className="App" >
        {
          this.state.users.map(monster => <h1 key={monster.id}>{monster.name.toUpperCase()}</h1>)
        }
      </div >

    )

  }
}

export default App;
