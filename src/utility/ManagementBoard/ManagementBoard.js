import React, { Component } from 'react';
import './ManagementBoard.css'

class ManagementBoard extends Component {

  constructor(){
    super();
    this.state = {
      newWord: "ddd",
      type: "Substantiv",
      translation: "",
      example: "",
      exampleTranslation: "",
    }
  }

  handleChangeNewWord = (event)=>{this.setState({newWord: event.target.value})}
  handleChangeTranslation = (event)=>{this.setState({translation: event.target.value})}
  handleChangeExample = (event)=>{this.setState({example: event.target.value})}
  handleChangeExampleTranslation = (event)=>{this.setState({exampleTranslation: event.target.value})}

  render(){
    return(
      <div className="management-board">
        <div className="row">
           <form className="col s12 m12">
             <div className="row">
               <div className="input-field col s6">
                 <input placeholder="Insert a new word" type="text" value={this.state.newWord} onChange={this.handleChangeNewWord}/>
               </div>
               <form action="#">
                 <p>
                   <label>
                     <input name="group1" type="radio" checked />
                     <span>Substantiv</span>
                   </label>
                 </p>
                 <p>
                   <label>
                     <input name="group1" type="radio" />
                     <span>Verb</span>
                   </label>
                 </p>
                 <p>
                   <label>
                     <input class="with-gap" name="group1" type="radio"  />
                     <span>Adjektiv</span>
                   </label>
                 </p>
               </form>
             </div>

             <div className="row">
               <div className="input-field col s12">
                 <input placeholder="Give an example with that word" type="text" value={this.state.example} onChange={this.handleChangeExample}/>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s12">
                  <input placeholder="Translation" type="text" value={this.state.translation} onChange={this.handleChangeTranslation}/>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s12">
                  <input placeholder="Translate the example" type="text" value={this.state.exampleTranslation} onChange={this.handleChangeExampleTranslation}/>
               </div>
             </div>
         </form>
        </div>
      </div>
    )
  }
}

export default ManagementBoard;
