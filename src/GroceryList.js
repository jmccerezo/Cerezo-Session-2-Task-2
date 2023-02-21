import React, { Component } from "react";

class GroceryList extends Component {
  state = {
    groceries: [
      {
        id: 1,
        name: "Shampoo",
        description: "Anti-Dandruff Shamppoo",
      },
      {
        id: 2,
        name: "Soap",
        description: "Body Soap",
      },
      {
        id: 3,
        name: "Detergent",
        description: "Anti-Bacterial Detergent",
      },
    ],
  };

  render() {
    const groceryList = this.state.groceries.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <p>Item: {item.name}</p>
          <p>Description: {item.description}</p>
        </React.Fragment>
      );
    });

    return (
      <>
        <h1>GROCERY LIST</h1>
        {groceryList}
      </>
    );
  }
}

export default GroceryList;
