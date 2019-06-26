import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';
import Component3 from './Component3';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class Component2 extends Component {
    render() {
        return (
            <Spring
            from = {{ opacity: 0}}
            to = {{ opacity: 1}}
          >
            { props => (
              <Router>
              <div style={props}>
                <div className="ifstate2 w3-flat-emerald">
              <select>
                <option value="volvo">aff_sub</option>
                <option value="saab">Alone</option>
                <option value="opel">Second</option>
                <option value="audi">Third</option>
              </select>
              <label2 htmlFor="ifstate2"></label2>
              <select>
                <option value="volvo">is</option>
                <option value="saab">Alone</option>
                <option value="opel">Second</option>
                <option value="audi">Third</option>
              </select>
              <label2 htmlFor="ifstate2"></label2>
              <input 
                className = "input2"
                placeholder="insert parameter"
                type="email"
                name="email"
                noValidate

              
              />
              <button>
                Add Rule
              </button>
              <i class="fas fa-minus-circle mr-10"></i>
              
            
              <i class="fas fa-plus-circle"><Link to = {"/component3"}></Link></i>
             
            </div>         
    
    
            </div>
            </Router>
            )}
          </Spring>    
        )
    }
}

export default Component2
