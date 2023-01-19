import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor(){
    super()
    this.state={
    Result:0
    }
  }
  calculate=()=>{
    var x=this.fnumbox.value*1
    var y=this.snumbox.value*1
    var op=this.opnumbox.value*1
    var z=0;
    switch(op){
      case 1:z=x+y;break;
      case 2:z=x-y;break;
      case 3:z=x*y;break;
      case 4:z=x/y;break;
      case 5:z=x%y;break;
      default:
    }
    this.setState({Result:z})
  }
  render() {
    return (
      <div className='Contain'>
        <h1>Calculator</h1>
        <div className='Calculator'>
        <b>Enter First Number:</b>&nbsp;&nbsp;<input ref={c=>this.fnumbox=c} placeholder='Enter the 1st number'></input><br></br><br></br>
        <b>Enter Second Number:</b>&nbsp;&nbsp;<input ref={c=>this.snumbox=c} placeholder='Enter the 2nd number'></input>
        <br></br>&nbsp;<br></br>
        <b>Perform Operation:&nbsp;&nbsp;</b>
        <select ref={c=>this.opnumbox=c}>
          <option value="1">Addition</option>
          <option value="2">Subtraction</option>
          <option value="3">Multiplication</option>
          <option value="4">Division</option>
          <option value="5">Modulus</option>
        </select>
       <br></br><br></br>
        <button onClick={this.calculate}><b>Calculate</b></button>
       
        <h2>Result:&nbsp;{this.state.Result}</h2>
      </div>
      </div>
    )
  }
}

