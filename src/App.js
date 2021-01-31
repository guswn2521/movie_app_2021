import React from "react";
import PropTyes from "prop-types";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count:0
  }
  add = () =>{
    this.setState(current => ({count: current.count +1}));
    console.log("add");
  };
  minus = () =>{
    this.setState(current => ({count: current.count - 1}));
    console.log("minus");
  };
  componentDidMount(){
    console.log("component rendered.");
  }
  componentDidUpdate(){
    console.log("I just updated.");
  }
  render() {
    console.log("I am rendering.");
    return (
    <div>
      <h1>The number is : {this.state.count} </h1>
      <button onClick = {this.add}>Add</button>
      <button onClick = {this.minus}>Minus</button>
    </div>
    )
  }

}

export default App;
