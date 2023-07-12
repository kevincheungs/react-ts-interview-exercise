import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Student {
  grade: string;
}

const students: Student[] = [
  { grade: "10" },
  { grade: "5" },
  { grade: "7" },
  { grade: "3" },
  { grade: "1" }
];

/**
* Main application level code
*/
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
