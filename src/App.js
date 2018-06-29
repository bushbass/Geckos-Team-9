import React, { Component } from "react";
import "./App.css";
import Bottom from "./Bottom";
import Top from "./Top";
import Input from './Input'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "Initial text"
    }
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(event){
    this.setState({data:event.target.value})
  }

  render() {
    const data = this.state.data
    return (
      <div className="App">
        <h1>{data} from the App.js</h1>
        <h2>and it's being called from the 'App' component's state too</h2>
        <hr />
        <Top data={data} />
        <hr />
        <Bottom data={data} />
        <hr/>
        <Input data={data} changeHandler = {this.handleFormChange} />
      </div>
    );
  }
}

export default App;
