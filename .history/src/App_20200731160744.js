import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello David',
    }
  }

  changeName() {
    const btn = document.getElementsByTagName('button');
    btn.addEventListener('click', () => {
      this.setState({ string: 'bye david' })
    });
  }


  render() {
    return (
      <div div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button>Change name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div >
    )
    // this.changeName();
  }
}

export default App;
