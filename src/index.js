import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Content from './Content';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Currency calculator'
    };
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="banner"></div>
        <div className="text-center">
          <Hello name={this.state.name} />
        </div>
        <div className="content">
          <Content/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
