import React, { useContext } from 'react';
import COunter from './COunter';
import HoverCounter from './HoverCounter';
import ThemeContext from './context/themeContext';

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  console.log('COntent rendered');
  return (
    <div>
      <h1>This is content</h1>
      <COunter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />

)}
      </COunter>
    </div>
  );
}
