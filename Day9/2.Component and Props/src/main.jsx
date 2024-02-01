import React from 'react';
import { createRoot } from 'react-dom/client';
import Clock2 from './Clock';

function CLockF({ locale }) {
  return (
    <h1>
      <span>
        {' '}
        Hello
        {' '}
        {new Date().toLocaleTimeString(locale)}
      </span>
    </h1>
  );
}
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CLockF locale="bn-BD" />
    <Clock2 locale="en-US"> United kingdom </Clock2>
  </React.StrictMode>,

);
