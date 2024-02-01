import React from 'react';
import './App.css';
// import Clock from './component/Clock';
import ClockList from './component/ClockList';

function App() {
  const quantitys = [1, 2, 3];

return (
  <div className="App">
    {/* <Clock /> */}
    <ClockList quantitys={quantitys} />
  </div>
);
}

export default App;
