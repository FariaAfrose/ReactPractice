import React from 'react';

class ClickCounter extends React.Component {
    render() {
      const { count, incrementCOunt } = this.props;
        return (
          <div>
            <button type="button " onClick={incrementCOunt}>
              {' '}
              Clicked
              {' '}
              {count}
              {' '}
              times
            </button>
          </div>
        );
    }
 }
 export default ClickCounter;
