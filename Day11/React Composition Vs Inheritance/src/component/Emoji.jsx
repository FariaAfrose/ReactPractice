import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

render() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    return this.props.children(this.addEmoji);
}
}
