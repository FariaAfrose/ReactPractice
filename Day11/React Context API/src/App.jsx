import React from 'react';
import ClickCounter from './component/ClickCounter';
import COunter from './component/COunter';
import Section from './component/Section';
import ThemeContext from './component/context/themeContext';

export default class App extends React.Component {
  state = {
    theme: 'dark',
  };

render() {
  const { theme } = this.state;
 return (
   <div className="App">
     <COunter>
       {(count, incrementCount) => (<ClickCounter count={count} incrementCount={incrementCount} />)}
     </COunter>
     <ThemeContext.Provider value={{ theme }}>
       <Section />
     </ThemeContext.Provider>
   </div>
 );
}
}
