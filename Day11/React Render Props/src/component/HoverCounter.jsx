import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class HoverCounter extends React.Component {
    render() {
      const { count, incrementCOunt } = this.props;
        return (
          <div>
            <h1 onMouseOver={incrementCOunt}>
              {' '}
              Clicked
              {' '}
              {count}
              {' '}
              times
            </h1>
          </div>
        );
    }
 }
 export default HoverCounter;
