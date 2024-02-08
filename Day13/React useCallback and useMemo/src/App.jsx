import React, { useState, useMemo, useCallback } from 'react';
import './App.css';
import Button from './component/Button';
import ShowCount from './component/ShowCount';
import Title from './component/Title';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const incrementByOne = useCallback(() => {
  setCount1((prevCount) => prevCount + 1);
}, []);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);
  // making a costly oparation for undestanding
const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 10000000) i += 1;
    return count1 % 2 === 0;
}, [count1]);
return (
  <div className="App">
    <Title />
    <ShowCount count={count1} title="Counter 1" />
    <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
    <Button handleClick={incrementByOne}>Increment by one</Button>
    <ShowCount count={count2} title="Counter 2" />

    <Button handleClick={incrementByFive}>Increment by Five</Button>
  </div>
);
}

export default App;
