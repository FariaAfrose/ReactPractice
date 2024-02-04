import React from 'react';

// eslint-disable-next-line no-unused-vars
const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
            // eslint-disable-next-line react/state-in-constructor
            state = {
              count: 0,
            };

            incrementCount = () => {
          this.setState((preState) => ({ count: preState.count + 1 }));
           };

           render() {
            const { count } = this.state;

            // eslint-disable-next-line react/no-unknown-property
            return <OriginalComponent count={count} incrementCount={this.incrementCount} />;
           }
    }
    return NewComponent;
};
export default withCounter;
