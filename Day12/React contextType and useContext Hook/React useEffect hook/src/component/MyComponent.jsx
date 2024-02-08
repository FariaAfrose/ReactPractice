import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    // const [text, setText] = useState(new Date());
    const [date, setDate] = useState(new Date());
  const tick = () => {
    console.log('clock click');
        setDate(new Date());
    };

      useEffect(() => {
            console.log('Starting time');
       const intervalId = setInterval(tick, 1000);
       return () => {
        console.log('component unmounted');
        clearInterval(intervalId);
       };
}, []);

    const addCLick = () => {
        setCount((pevCount) => pevCount + 1);
            console.log('click');
         };
// run every render
    // useEffect(() => {
    //     document.title = `Clicked ${count}times`;
    //     console.log('useEffect');
    // }, [count]);
//  const addCLick = () => {
//     setText(({ pevCount }) => ({
//             count: pevCount + 1,

//         }));
//         console.log('click');
    //  };
return (

  <div>
    <p>
      Time:
      {date.toLocaleTimeString()}
    </p>
    {/* <p><input type="text" onChange={(e) => setText(e.target.value)} /></p> */}
    <p>
      <button type="button" onClick={addCLick}>Click</button>
    </p>
  </div>
);
}
