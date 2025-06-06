import React, { useState } from 'react';
import { greet } from '@my/utils';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{greet('web-a')}</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>First</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Second</td>
          </tr>
        </tbody>
      </table>
      <button className="primary" onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default App;
