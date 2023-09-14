import { Component } from 'react';
import './App.css'
import {Paragraf, UserListClass, UserListFunction} from './components'

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [ {name: "John", age: 40}, {name: "Bob", age: 30}, {name: "Mack", age: 19}],
      someText: "Ovo je proizvoljna tekstualna varijabla"
    };
  }

  agePlus = () => {
    const {users} = this.state;
    const newUsers = users.map(i => {return {name: i.name, age: i.age + 1}});
    this.setState({users: newUsers})
  }

  render(){
    return (
      <>
        <h1>z7-z8: components children state</h1>

        <p>App je class-na komponenta</p>

        <h2>Funkcijska komponenta paragrafa:</h2>
        <Paragraf name={this.state.users[0].name} age={this.state.users[0].age} />

        <h2>Class-na komponenta liste:</h2>
        <UserListClass users={this.state.users} />

        <h2>Funkcijska komponenta liste</h2>
        <UserListFunction users={this.state.users} />

        <h2>Funkcijskoj komponenti šaljem children</h2>
        <UserListFunction users={this.state.users}>
          <p>Uz ovu listu ide child koji sadrži: &quot;{this.state.someText}&quot;</p>
        </UserListFunction>

        <h2>Promjena state-a state.user.age za App komponentu</h2>
        <p>&rarr; mijenjaju se props u svim listama</p>
        <button onClick={this.agePlus}>Age Plus One Button</button>

      </>
    );
  }
}

export default App;
