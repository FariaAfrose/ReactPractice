import React from 'react';
import withCounter from './withCounter';

function ClickCounter(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked
        {count}
        {' '}
        times
      </button>
    </div>
  );
  }
export default withCounter(ClickCounter);

/* eslint-disable react/prefer-stateless-function */
// import React from 'react';

//  class ClickCounter extends React.Component {
//   state = {
//     count: 0,
//   };

//  incrementCOunt = () => {
// this.setState((preState) => ({ count: preState.count + 1 }));
//  };

//     render() {
//       const { count } = this.state;
//         return (
//           <div>
//             <button type="button" onClick={this.incrementCOunt}>
//               {' '}
//               Clicked
//               {' '}
//               {count}
//               {' '}
//               times
//             </button>
//           </div>
//         );
//     }
//  }
//  export default ClickCounter;
