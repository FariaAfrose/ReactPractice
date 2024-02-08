import React, { useState } from 'react';
import './App.css';
import MyComponent from './component/MyComponent';
// import MyComponentClass from './component/MyComponentClass';

function App() {
  const [show, setShow] = useState(true);
return (
  <div className="App">
    <h1>we shall learn useEffect() Today</h1>
    <div>
      {show && <MyComponent />}
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {' '}
          {show ? 'Hide post' : 'show post'}
        </button>
      </p>
    </div>
    {/* <MyComponentClass /> */}

  </div>
);
}

export default App;
