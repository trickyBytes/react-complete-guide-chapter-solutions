import React, { Component } from "react";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "asd", name: "Max", age: 28 },
      { id: "asdasdas", name: "Manu", age: 29 },
      { id: "weewrewr", name: "Stephanie", age: 26 }
    ],
    otherState: "Some other Value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      //Use 'spread ...' to clone/copy
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHander = personIndex => {
    const persons = [...this.state.persons]; //New array with objects from old - makes state immutable here.
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHander}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;