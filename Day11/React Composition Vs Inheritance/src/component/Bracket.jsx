import React from 'react';

export default class Braket extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    addBraket = (text) => ` [${text}]`;

render() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    return this.props.children(this.addBraket);
}
}
