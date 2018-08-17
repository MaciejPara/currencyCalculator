import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Content from './Content';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Currency calculator'
    };
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="banner"></div>
        <div className="text-center">
          <Header name={this.state.text} />
        </div>
        <div className="content">
          <Content/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
