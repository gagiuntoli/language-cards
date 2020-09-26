import React from 'react';
import './App.css';
import Card from './utility/Card/Card';
import cards from './data/cards.js';

function App() {
  // console.log(cards)

  return (
    <div className="row">
      <div className="col s6 m5">
        <Card card={cards[0]} />
      </div>
    </div>
  );
}

export default App;
