import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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
        <input type='search' placeholder='Search monster' onChange={e => {
          this.setState({ searchField: e.target.value });
          console.log(this.state.searchField);
        }} />
        <CardList monsters={this.state.monsters} />

      </div>

    )

  }
}

export default App;
