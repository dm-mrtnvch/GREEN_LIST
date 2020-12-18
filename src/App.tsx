import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Dymich', 'Sveta', 'Katya', 'Viktor', 'Ignat']
  const users = [
      {id: 1, name: 'Dymich'},
      {id: 2, name: 'Sveta'},
      {id: 3, name: 'Katya'},
      {id: 4, name: 'Viktor'},
      {id: 5, name: 'Ignat'},
  ]
  // const liElements = names.map(n => <li>{n}</li>)
    const liElements = users.map((u) => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
