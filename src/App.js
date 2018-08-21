import React, { Component } from 'react';
import './App.css';

class App extends Component {
    this.state = {
        list
    }
    handleSubmit(e){
        e.preventDefault();

    }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="myfield">Enter item</label>
            <input type="text" id="myfield" /><br/>
            <input type="submit" value="submit"/><br/>
        </form>
          <ol type="A">
            <li></li>
          </ol>
      </div>
    );
  }
}

export default App;
