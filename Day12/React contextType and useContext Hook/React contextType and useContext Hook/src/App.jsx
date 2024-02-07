import React from 'react';
import ClickCounter from './component/ClickCounter';
import COunter from './component/COunter';
import Section from './component/Section';
import ThemeContext from './component/context/themeContext';

export default class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    theme: 'light',

 // eslint-disable-next-line react/no-unused-state
 switchTheme: () => {
  this.setState(({ theme }) => {
    if (theme === 'dark') {
      return { theme: 'light' };
    } return {
      theme: 'dark',
        };
  });
},
 };

render() {
 return (
   <div className="App">
     <COunter>
       {(count, incrementCount) => (<ClickCounter count={count} incrementCount={incrementCount} />)}
     </COunter>
     <ThemeContext.Provider value={this.state}>
       <Section />
     </ThemeContext.Provider>
   </div>
 );
}
}
