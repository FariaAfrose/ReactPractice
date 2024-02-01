import React from 'react';
import './App.css';
import Clock from './component/Clock';

function App() {
return (
  <div className="App">
    <h1>App Component</h1>
    <Clock locale="bn-BD" />
  </div>
);
}

export default App;
