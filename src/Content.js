import React, { Component } from 'react';
import { render } from 'react-dom';

class Content extends Component {
  constructor(){
    super();
    this.euro;
    this.pln;
    this.state={
      result:0
    };
  }
  count(){
    let euro = document.getElementById('euro').value;
    let pln = document.getElementById('pln').value;
    
    euro = parseFloat(euro);
    pln = parseFloat(pln);

    let result = euro*pln;
    
    result =  result.toFixed(2);
    this.setState({result :  result});
  }
  render() {
    if(this.state.result>0){
    
      return (
      
        <div className="polygon">
          <div className="text-center">
            <div className="row">
              <div className="col-5">
                <select>
                  <option>EUR</option>
                </select>
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <select>
                  <option>PLN</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-5"><input type="number" id="euro" defaultValue={4.44}/></div>
              <div className="col-2"><img src="https://image.flaticon.com/icons/svg/25/25677.svg"/></div>
              <div className="col-5"><input type="number" id="pln" defaultValue={100}/></div>
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
                <select>
                  <option>EUR</option>
                </select>
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <select>
                  <option>PLN</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-5"><input type="number" id="euro" defaultValue={4.44}/></div>
              <div className="col-2"><img src="https://image.flaticon.com/icons/svg/25/25677.svg"/></div>
              <div className="col-5"><input type="number" id="pln" defaultValue={100}/></div>
            </div>  
            
              <p className="button" onClick={this.count.bind(this)}>Count</p>
            
          </div>
        </div>
      );
    }
  }
}
export default  Content;