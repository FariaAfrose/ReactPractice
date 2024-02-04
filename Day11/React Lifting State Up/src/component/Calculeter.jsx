import React from 'react';
import Boiling from './Boiling';
import TemperatureInput from './TemparaterInput';
import { convert, toCelsius, tofarenheit } from '../lib/converter';

export default class Calculater extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = { temperature: '', scale: 'c' };

handelChange = (e, scale) => {
    this.setState({
        temperature: e.target.value,
        scale,
    });
};

render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const farenheit = scale === 'c' ? convert(temperature, tofarenheit) : temperature;
return (
  <div>
    <TemperatureInput scale="c" temperature={celsius} onTemparatureChange={this.handelChange} />
    <TemperatureInput scale="f" temperature={farenheit} onTemparatureChange={this.handelChange} />
    <Boiling celsius={parseFloat(temperature)} />
  </div>
);
}
}
