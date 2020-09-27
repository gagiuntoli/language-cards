import React, { Component } from 'react';
import './App.css';
import Card from './utility/Card/Card';
import cards from './data/cards.js';
import InfoTable from './utility/InfoTable/InfoTable';
import ManagementBoard from './utility/ManagementBoard/ManagementBoard';

class App extends Component {
  
  render() {
    return (
      <div>
      <div className="row">
        <div className="col s2 m5">
          <Card card={cards[0]} />
          <Card card={cards[1]} />
        </div>
        <div className="col s2 m5">
          <ManagementBoard />
        </div>
      </div>
      <div className="row">
        <div className="col s2 m5">
          <InfoTable />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
