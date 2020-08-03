import React from 'react';
import { CardList } from './components/card-list/card-list';
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
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
  }

  render() {
    return (
      <div className="App">
        <CardList users={this.state.users />

      </div>

    )

  }
}

export default App;
