import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: 'Some other Value'
  };

  switchNameHandler = (newName) => {
    // console.log("Was clicked!");
    //Don't do this this.state.persons[0].name = 'Maximillian'
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 27 }
    ]})
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* One way of binding a method call to on click event, use bind primarliy as it's more efficient (not sure why) */}
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          /* Another way of binding a method call to on click event */
          click={this.switchNameHandler.bind(this, 'Max!')}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
