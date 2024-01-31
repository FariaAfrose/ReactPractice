import React from 'react';
import ReactDOM from 'react-dom/client';

class Clock {
  print(locale) {
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
}
const ClockCOmponent = new Clock();
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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CLockF locale="bn-BD" />
    {ClockCOmponent.print('en-US')}
  </React.StrictMode>,

);
export default ClockCOmponent;