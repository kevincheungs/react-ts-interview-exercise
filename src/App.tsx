import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const gradeLevels: string[] = ["2", "5", "3", "4"];

  let orderedList: (string | number)[] = sortGradeLevels(gradeLevels);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          The ordered list is: ({orderedList.join(", ")})
        </p>
      </header>
    </div>
  );
}

export default App;

/**
 * 
 * @param gradeLevels unordered list of grades
 * @returns sorted list of grades in ascending order
 */
function sortGradeLevels(gradeLevels : string[]): (string | number)[] {

  return [];
}
