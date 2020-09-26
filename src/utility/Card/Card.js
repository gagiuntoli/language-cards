import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    console.log(this.props.card)
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          <div onClick={this.handleClick} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{this.props.card.word}</span>
                  <p>{this.props.card.example}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div onClick={this.handleClick} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{this.props.card.wordTranslated}</span>
                  <p>{this.props.card.exampleTranslated}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    )
  }
}

export default Card;
