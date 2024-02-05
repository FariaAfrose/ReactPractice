import React from 'react';
import COunter from './COunter';
import HoverCounter from './HoverCounter';
import ThemeContext from './context/themeContext';

export default function Content() {
  return (
    <div>
      <h1>This is content</h1>
      <COunter>
        {(count, incrementCount) => (
          <ThemeContext.Consumer>
            { ({ theme }) => (
              <HoverCounter
                count={count}
                incrementCount={incrementCount}
                theme={theme}
              />
)}
          </ThemeContext.Consumer>
)}
      </COunter>
    </div>
  );
}
