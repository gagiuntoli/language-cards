import React, { Component } from 'react';
import './InfoTable.css';

class InfoTable extends Component {

  constructor() {
    super();
    this.state = {
      totalCards: 0,
      retailed: 0
    }
  }

  render(){
    return (
      <div className="info-table">
        <ul className="collection  col s6 m4">
          <li className="collection-item teal lighten-2">Total Number of Cards: {this.state.totalCards}</li>
          <li className="collection-item teal lighten-2">Retailed: {this.state.retailed}</li>
        </ul>
      </div>
    )
  }
}

export default InfoTable;
