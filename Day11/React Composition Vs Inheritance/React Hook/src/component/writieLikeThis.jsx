import { useState } from 'react';

function WriteLikeThis() {
    const [count, setCount] = useState(0);
let i = 0;
// const addFive = () => {
   // while (i < 5) {
//     setCount(count + 1);
//     i += 1;}
// };
const addFive = () => {
    while (i < 5) {
        setCount((preState) => preState + 1);
        i += 1;
    }
};
return (
  <div>
    {count}
    <p>
      <button type="button" onClick={() => setCount((preState) => preState + 1)}> Add1</button>
    </p>
    <p>
      <button type="button" onClick={addFive}> Add5</button>
    </p>
  </div>
);
}
export default WriteLikeThis;
