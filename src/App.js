import {Component} from "react";
import Counter from "./components/counter";

class App extends Component {
constructor() {
  super();
  this.state = {
    minValue: 0,
    maxValue: Infinity,
  }
}

handleMinValueInputChange = (event) => {
this.setState({
  minValue: event.target.value,
})
}

handleMaxValueInputChange = (event) => {
  this.setState({
    maxValue: event.target.value,
  })
  }

render() {
  const {state: {minValue,maxValue}} = this;
  return ( 
  <div className="wrapper">
    <div className="inputs">
    <input className="minValueInput" onChange={this.handleMinValueInputChange} type="number" placeholder="Enter the minimum value"/>
    <input className="maxValueInput" onChange={this.handleMaxValueInputChange} type="number" placeholder="Enter the maximum value"/>
   </div>
   <Counter minValue={minValue} maxValue={maxValue} />
  </div>
   
  )
}
}



export default App;
