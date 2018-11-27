import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 28 },
      { name: "Stephanie", age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  swichNameHandler = (newName) => {
    //console.log("Was clicked!");
    // Don't do this!!! this.state.persons[0].name = "Maxmilian";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 28 },
        { name: "Stephanie", age: 30 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 30 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.swichNameHandler.bind(this, 'Max')} 
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        </div> 
      );
    }
     return (
       <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working!</p>
         <button 
           style = {style}
           onClick={this.togglePersonHandler}>Switch Name</button> 
          {persons}  
       </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App'));
  }
}

export default App;
