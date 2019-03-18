import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [{name: 'Max', age: 21},
            {name: 'Manny', age: 89},
            {name: 'Amy', age: 18}]
    };

    switchNameHandler = (newName) => {
        console.log("Was clicked!");
        //Don't do this: this.state.persons[0].name = "Sergiy";
        this.setState({
            persons: [{name: newName, age: 39},
                {name: 'Manny', age: 89},
                {name: 'Amy', age: 18}]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [{name: "Ahmed", age: 39},
                {name: event.target.value, age: 30},
                {name: 'Amy', age: 18}]
        });
    };

    render() {

        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is <strong> really </strong> <i> working!</i></p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Mark')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'John')}
                    changed={this.nameChangedHandler}
                >I work as snow
                    keeper.</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
