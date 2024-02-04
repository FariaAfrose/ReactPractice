import React from 'react';

const scaleNames = {
c: 'Celsius',
f: 'Fahrenheit',
};

// eslint-disable-next-line react/prop-types
export default function TemperatureInput({ temperature, scale, onTemparatureChange }) {
return (
  <fieldset>
    <legend>
      {' '}
      Enter temperature in
      {scaleNames[scale]}
      :
    </legend>
    <input type="text" value={temperature} onChange={(e) => onTemparatureChange(e, scale)} />
  </fieldset>
);
}
