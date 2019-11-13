import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };

    // In case you forgot that Brendan Eich committed crimes against humanity
    //this.onSearchChange = this.onSearchChange.bind(this);
    // or just use arrow functions as below
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // The following is an example of destructuring variable calls in JavaScript
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(m => 
      m.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  
  }
}

// Apparently the fckheads who made react can't decide something as basic as what the conventional style should be for 
// creating the root component of the app. I don't know what is current, but there are apparently two different ways of
// doing this. The first is the default method creating the App as a function, and the second creates the App as a class
// (I think the class method is older). In any case, the class method gives a convenient place to initialize state.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
