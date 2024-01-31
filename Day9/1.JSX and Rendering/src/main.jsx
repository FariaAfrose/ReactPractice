import React from 'react';
import { createRoot } from 'react-dom/client';

const elemnet = <h1> Hello!!</h1>;

function Practice(props) {
  if (props.user) {
    return (
      <h1>
        hlw,
        {props.user}
        {' '}
        !
      </h1>
    );
  }
return (<h1>hello, Stranger</h1>);
}
const root = createRoot(document.getElementById('root'));

const Practice2 = () => {
  const index = 0;

  setInterval(() => {
    const element3 = (
      <h1 className="heading" tabIndex={index}>
        <span className="text">
          Time
          {' '}
          {new Date().toLocaleTimeString()}
        </span>
      </h1>
    );
root.render(element3);
  }, 1000);
};
const elemnet2 = (
  <div>
    <h1>
      {' '}
      Hello
    </h1>
    <Practice user="AKi" />
    <Practice2 />
  </div>
);

console.log('elemnet', { elemnet });
console.log('elemnet2', { elemnet2 });
root.render(elemnet2);
