import React from 'react';

export default class COunter extends React.Component {
    state = {
        count: 0,
      };

     incrementCount = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
     };

  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}
