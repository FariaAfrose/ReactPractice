import React from 'react';
import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
// import User from './component/User';
import COunter from './component/COunter';

function App() {
return (
  <div className="App">
    {/* <ClickCounter /> */}
    {/* <HoverCounter /> */}
    {/* <User name="Faria" /> */}
    {/* <User name={() => 'Faria'} /> */}
    {/* <User render={(isLoggedIn) => ((isLoggedIn) ? 'Faria' : 'AKi')} /> */}
    <COunter render={(count, incrementCOunt) => <ClickCounter count={count} incrementCOunt={incrementCOunt} />} />
    <COunter render={(count, incrementCOunt) => <HoverCounter count={count} incrementCOunt={incrementCOunt} />} />

  </div>
);
}

export default App;
