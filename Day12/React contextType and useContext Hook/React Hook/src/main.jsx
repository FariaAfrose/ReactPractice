import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';
import WriteLikeThis from './component/writieLikeThis';
// making useState
const states = [];
let stateIndex = -1;
function useState(defaultValue) {
const index = ++stateIndex;
if (states[index]) return states[index];
const setValue = (newValue) => {
    states[index][0] = newValue;
    renderWithFaria();
};
const returnArray = [defaultValue, setValue];
states[index] = returnArray;
return returnArray;
}
function App() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
const handleInput = (e) => {
    const inputValue = e.target.value;
    const UpdatedWarning = inputValue.includes('.js') ? 'You need Javascript skill to complete the task. Do you have it?' : null;
    setTodo(inputValue);
    setWarning(UpdatedWarning);
};

 return (
   <div>
     <p>
       {' '}
       {todo}
       {' '}
     </p>
     <p>
       <textarea
         name="todo"
         value={todo}
         onChange={handleInput}
       />
     </p>
     <hr />
     <h2>{warning || 'Good choice'}</h2>
   </div>
 );
}
export default App;
const root = createRoot(document.getElementById('root'));
function renderWithFaria() {
     stateIndex = -1;

    root.render(
      <React.StrictMode>
        <App />
        <WriteLikeThis />
      </React.StrictMode>,
      );
}
renderWithFaria();
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
