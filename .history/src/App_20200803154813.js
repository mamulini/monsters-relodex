import React from 'react';
import { CardList } from './components/card-list/card-list';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />

      </div>

    )

  }
}

export default App;
