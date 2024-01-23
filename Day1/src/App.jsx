import React from 'react';
import './App.css';

function App() {
  const title = ' welcome to react';
 const likes = 50;
return (
  <div className="App">
    <h1>App Component</h1>
    <h2>{title}</h2>
    <p>
      Likes
      {' '}
      {likes}
      {' '}
      time
    </p>
    <p>
      {10}
    </p>
    <p>Hello, ninjas</p>
    <p>[1,2,3,4,5,]</p>
    <p>{Math.random() * 10}</p>
    <a href={likes}>Google Site</a>
  </div>
);
}

export default App;
