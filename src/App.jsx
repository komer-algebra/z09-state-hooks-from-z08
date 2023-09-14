import { useState } from 'react';
import './App.css'
import {Paragraf, UserListClass, UserListFunction} from './components'

const App = () => {

  // const [state, setState] = useState([initial state]); - defining useState hook
  const [users, setUsers] = useState(
      [ {name: "John", age: 40},
        {name: "Bob", age: 30},
        {name: "Mack", age: 19} ]
  );

  const someText = "Neki proizvoljan tekst";

  const agePlus = () => { // function that changes state
    //  create newState from prevState
    const newUsers = users.map((user) => {
      return {...user, age: user.age +1};
    });
    // setState(newState); - using state hook
    setUsers(newUsers);
  }

  return (
    <>
      <h1>z7-z8: components children state</h1>

      <p>App je class-na komponenta</p>

      <h2>Funkcijska komponenta paragrafa:</h2>
      <Paragraf name={users[0].name} age={users[0].age} />
      {/* sending state as props */}

      <h2>Class-na komponenta liste:</h2>
      <UserListClass users={users} />
      {/* sending state as props */}

      <h2>Funkcijska komponenta liste</h2>
      <UserListFunction users={users} />
      {/* sending state as props */}

      <h2>Funkcijskoj komponenti šaljem children</h2>
      <UserListFunction users={users}>
        <p>Uz ovu listu ide child koji sadrži: &quot;{someText}&quot;</p>
      </UserListFunction>
      {/* sending state as props */}

      <h2>Promjena state-a state.user.age za App komponentu</h2>
      <p>&rarr; mijenjaju se props u svim listama</p>
      <button onClick={agePlus}>Age Plus One Button</button>

    </>
  );
}

export default App;
