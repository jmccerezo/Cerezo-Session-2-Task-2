import React, { Component } from "react";
import GroceryList from "./GroceryList"

class App extends Component {
  
  render() {
    return (
      <>
       <GroceryList data={this.state} />
      </>
    )
  }
}

export default App;