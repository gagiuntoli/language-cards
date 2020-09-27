import React, { Component } from 'react';
import './ManagementBoard.css'

class ManagementBoard extends Component {

  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="management-board">
        <div className="row">
           <form className="col s12 m12">
             <div className="row">
               <div className="input-field col s6">
                 <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                 <label for="first_name">New word</label>
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
                 <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
                 <label for="disabled">Example</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s12">
                 <input id="password" type="password" className="validate"/>
                 <label for="password">Translation</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s12">
                 <input id="email" type="email" className="validate"/>
                 <label for="email">Example translated</label>
               </div>
             </div>
         </form>
        </div>
      </div>
    )
  }
}

export default ManagementBoard;
