import {Component} from "react";


class Counter extends Component {
constructor() {
  super();
  this.state = {
    count: 0,
  }
}



handleIncrease = () => {
  const {state: {count},props: {maxValue,step}} = this;
    if(maxValue > count + step) {
        this.setState({
            count: count + step,
        })
    }
}


handleDecrease = () => {
  const {state: {count},props: {minValue,step}} = this;
    if(minValue < count - step) {
        this.setState({
            count: count - step,
        })
    }
}


handleReset = () => { 
    this.setState({
        count: Number(this.props.minValue),
       })
      
}


render() {
    const { state: {count} } = this;
  return (
    <div className="counter">
    <button onClick={this.handleIncrease}>+</button>
    <div>Count: {count}</div>
    <button onClick={this.handleDecrease}>-</button>
    <button className="resetButton" onClick={this.handleReset}>Reset</button>
    </div>
  )
}
}



export default Counter;
