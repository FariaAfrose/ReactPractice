import React, { useState } from 'react';

function Home() {
  // let name = 'AKi';
  const [name, setName] = useState('AKi');
  const [age, setAge] = useState(25);
  const handleClick = () => {
    // name = 'Kai';
    // console.log(name);
    setName('Kai');
    setAge(30);
  };

  return (
    <div className="Home">
      <h2>
        HomePage
      </h2>
      <p>
        {name}
        {' '}
        is
        {' '}
        {age}
        {' '}
        years old.
      </p>
      <button type="button" onClick={handleClick}> Click Me</button>
    </div>
  );
}
export default Home;
