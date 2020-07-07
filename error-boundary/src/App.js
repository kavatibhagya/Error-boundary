import React from 'react';
import Counter from './counter';
import Errorboundary from './error-boundary'
import './App.css';

function App() {
  return (
    <div className="App">
      <Errorboundary>
      <Counter/>
      </Errorboundary>
    </div>
  );
}

export default App;
