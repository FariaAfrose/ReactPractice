import React from 'react';
import Button from './Button';

class Clock extends React.Component {
// Way1
   state = { date: new Date(), locale: 'bn-BD' };
// Way2
// constructor(props) {
//   super(props);
//   this.state = { date: new Date(), locale: 'bn-BD' };
//   this.handelClick = this.handelClick.bind(this);
// }

componentDidMount() {
  this.clockTimer = setInterval(() => this.tick(), 1000);
}

componentWillUnmount() {
  clearInterval(this.clockTimer);
}

 // Way1/best
 handelClick = () => {
this.setState({
  locale: 'en-US',
});
};

// Way2
//  handelClick() {
// this.setState({
//   locale: 'en-US',
// });
// }
// paramiter passing
// handelClick = (locale) => {
//   this.setState({
//     locale,
//   });
//   };
  tick() {
    this.setState({
      date: new Date(),
    });
}

    render() {
      console.log('Clock component rander');
      const { date, locale } = this.state;
        return (
          <div>
            <h1>
              <span className="text">
                {' '}
                Bangladesh
                {' '}
                {date.toLocaleTimeString(locale)}
              </span>
            </h1>

            {/* <Button change={this.handelClick}>Click here</Button> */}
            <Button change={this.handelClick} locale="en-US">Click here</Button>

            {/* <button type="button" onClick={() => this.handelClick('en-US')}>Click here</button> */}
            {/* <button type="button" onClick={this.handelClick}>Click here</button> */}
            {/* <button type="button" onClick={this.handelClick.bind(this, 'en-US')}>Click here</button> */}
          </div>
        );
    }
  }
export default Clock;
