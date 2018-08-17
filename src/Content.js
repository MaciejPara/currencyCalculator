import React, { Component } from 'react';
import { render } from 'react-dom';

class Content extends Component {
  constructor(){
    super();
    this.euro;
    this.pln;
    this.curr = ['PLN', 'EUR', 'GBP', 'USD'];
    this.state={
      result:0,
      GBP: 4.81,
      USD: 3.79,
      EUR: 4.31,
      PLN: 1
    };
  }
  count = () =>{

    let result = euro*pln;
    
    result =  result.toFixed(2);
    this.setState({result :  result});
  };
  setSelect = () =>{
    
    return (
      <select>
        <option>{this.curr[0]}</option>
        <option selected="selected">{this.curr[1]}</option>
        <option>{this.curr[2]}</option>
        <option>{this.curr[3]}</option>
      </select>
    );
  };
  render() {
    
    if(this.state.result>0){
    
      return (
      
        <div className="polygon">
          <div className="text-center">
            <div className="row">
              <div className="col-5">
                {this.setSelect}
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                {this.setSelect}
              </div>
            </div>

            <div className="row">
              <div className="col-5"><input type="number" id="euro" defaultValue={}/></div>
              <div className="col-2"><img src="https://image.flaticon.com/icons/svg/25/25677.svg"/></div>
              <div className="col-5"><input type="number" id="pln" defaultValue={}/></div>
            </div>  
            
              <p className="button" onClick={this.count.bind(this)}>Count</p>
            
          </div>

          <div className="text-center">
            <h3>Result {this.state.result}</h3>
          </div>
        </div>
        
      );
      
    }
    else{
      return (
        <div className="polygon">
          <div className="text-center">
            <div className="row">
              <div className="col-5">
                {this.setSelect()}                 
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                {this.setSelect()}   
              </div>
            </div>
            <div className="row">
              <div className="col-5"><input type="number" id="euro" defaultValue={this.state.eur}/></div>
              <div className="col-2"><img src="https://image.flaticon.com/icons/svg/25/25677.svg"/></div>
              <div className="col-5"><input type="number" id="pln" defaultValue={this.state.usd}/></div>
            </div>  
            
              <p className="button" onClick={this.count.bind(this)}>Count</p>
            
          </div>
        </div>
      );
    }
  }
}
export default  Content;