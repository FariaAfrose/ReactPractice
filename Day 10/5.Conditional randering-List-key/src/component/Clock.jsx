import React from 'react';
import Button from './Button';

class Clock extends React.Component {
   state = { date: new Date(), locale: 'bn-BD' };

componentDidMount() {
  this.clockTimer = setInterval(() => this.tick(), 1000);
}

componentWillUnmount() {
  clearInterval(this.clockTimer);
}

 handelClick = () => {
  const newLocals = this.state.locale === 'bn-BD' ? 'en-US' : 'bn-BD';
this.setState({
  locale: newLocals,
});
};

  tick() {
    this.setState({
      date: new Date(),
    });
}

    render() {
      const { date, locale } = this.state;
    //   let button;
    //  if (locale === 'bn-BD') {
    //   button = (
    //     <Button change={this.handelClick} locale="en-US">Click here</Button>

    //   );
    //  } else {
    //   button = (
    //     <Button change={this.handelClick} locale="bn-BD">Click here</Button>

    //   );
    //  }
        return (
          <div>
            <h1>
              <span className="text">
                {date.toLocaleTimeString(locale)}
              </span>
            </h1>
            {/* {button} */}
            {locale === 'bn-BD' ? (<Button change={this.handelClick} locale="en-US" show={false} enable={false} />
) : (<Button change={this.handelClick} locale="bn-BD" show enable />
)}
          </div>
        );
    }
  }
export default Clock;
