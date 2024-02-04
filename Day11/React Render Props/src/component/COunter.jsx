import React, { Component } from 'react';

export default class COunter extends Component {
    state = {
        COunter: 0,
      };

     incrementCOunt = () => {
    this.setState((preState) => ({ COunter: preState.count + 1 }));
     };

  render() {
    const { render } = this.props;
    const { COunter } = this.state;
    return render(COunter, this.incrementCOunt);
  }
}
