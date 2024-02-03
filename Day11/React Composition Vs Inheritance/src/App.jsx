import React from 'react';
import './App.css';
import Text from './component/Text';
import Emoji from './component/Emoji';
import Braket from './component/Bracket';

function App() {
return (
  <>
    <div className="App" />
    <Emoji>
      { (addEmoji) => (
        <Braket>
          { (addBraket) => (
            <Text addEmoji={addEmoji} addBraket={addBraket} />
)}
        </Braket>
)}
    </Emoji>
  </>
);
}

export default App;
