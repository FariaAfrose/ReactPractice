import React from 'react';

const handelClick = (e) => {
  console.log('hello,ninjas', e);
};
const handelClickAgain = (name, e) => {
  console.log('hello', name, e.target);
};
function Home() {
    return (
      <div className="home">
        <h2> HomePage </h2>
        <button type="button" onClick={handelClick}>Click me</button>
        <button
          type="button"
          onClick={(e) => handelClickAgain('Faria', e)}
        >
          Click me
        </button>
      </div>
    );
}

export default Home;
