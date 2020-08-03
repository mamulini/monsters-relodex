import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json)
      .then(data => this.setState({ users: data }))
  }

  render() {
    return (
      <div className="App" >
        {this.state.users.map(user => <h1 key={user.id}>{user.name}</h1>)}
      </div >

    )

  }
}

export default App;
