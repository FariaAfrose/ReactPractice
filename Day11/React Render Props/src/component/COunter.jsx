import React from 'react';

export default class COunter extends React.Component {
    state = {
        count: 0,
      };

     incrementCOunt = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
     };

  render() {
    const { render } = this.props;
    const { count } = this.state;
    return render(count, this.incrementCOunt);
  }
}
