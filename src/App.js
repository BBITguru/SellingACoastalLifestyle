import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';



class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>



    );
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
export default App;
