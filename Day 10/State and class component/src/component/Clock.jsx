import React from 'react';

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }

  state = { date: new Date() };

componentDidMount() {
  this.clockTimer = setInterval(() => this.tick(), 1000);}

componentWillUnmount() {
  clearInterval(this.clockTimer);
}

  tick() {
    this.setState({
      date: new Date(),
    });
}

    render() {
        return (
          <h1>
            <span className="text">
              {' '}
              Bangladesh
              -
              {this.props.children}
              {' '}
              {this.state.date.toLocaleTimeString(this.props.locale)}
            </span>
          </h1>
        );
    }
  }
export default Clock;
