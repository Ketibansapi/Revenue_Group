import React from "react";
import { Spring } from "react-spring/renderprops";
import Component2 from "./Component2"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Component3 from "./Component3";

export default function Component1() {
  
  return (
    <Spring
        from = {{ opacity: 0, marginTop: -500 }}
        to = {{ opacity: 1, marginTop:0 }}
        config = {{ delay: 250, duration: 250}}
      >
        { props => (
          <Router>
          <div style={props}>
            <div className="wrapper">
        <div className="form-wrapper">
          <h1>Add Revenue Group</h1>


          <div className="email">
              <label htmlFor="email">Revenue Group Title</label>
              <input

                placeholder="Fashion - 15% "
                type="email"
                name="email"
                noValidate

              />
            </div>

            <div className="ifstate">
              <label2 htmlFor="ifstate">If</label2>
              <select>
                <option value="volvo">All</option>
                <option value="saab">Alone</option>
                <option value="opel">Second</option>
                <option value="audi">Third</option>
              </select>
              <label3 htmlFor="ifstate">of the below condition are met</label3>
            </div>

            <Component2 />

            <div className="ifstate">
              <label2 htmlFor="ifstate">then revenue is</label2>
              <input 
                className = "input2"
                placeholder="15%"
                type="email"
                name="email"
                noValidate

              
              />
            </div>
            
            <div className="createAccount">
              <button class="button" type="submit">Confirm</button>
              <button class="button2" type="submit">Cancel</button>
            </div>           


        </div>
        
      </div>
          </div>
          </Router>
        )}
      </Spring>
  );
 }


