import React, { Component } from "react";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
      { id: "asd", name: "Max", age: 28 },
      { id: "asdasdas", name: "Manu", age: 29 },
      { id: "weewrewr", name: "Stephanie", age: 26 }
    ],
    otherState: "Some other Value",
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", state)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

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
    console.log('[App.js] render')
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
          title={this.props.appTitle}
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
