import { useState } from "react"; //importing from react library
import './App.css';

/*function useState(input) {
   function setInput(x){
     input = x;
   }
   window.reload();   //show on page
   return [input,setInput]
 }
*/

function App() {
  const [item, setItem] = useState('');

  function showItems(operator) {
    // setItem(item);
    console.log(operator);
    // return item;
  }

  return (
    <div className="App">
      <div className="inputs">{item}</div>
      <div className="digits">
        <button onClick={() => setItem('1')}>1</button>
        <button onClick={() => setItem('2')}>2</button>
        <button onClick={() => setItem('3')}>3</button>
        <button onClick={() => setItem('4')}>4</button>
        <button onClick={() => setItem('5')}>5</button>
        <button onClick={() => setItem('6')}>6</button>
        <button onClick={() => setItem('7')}>7</button>
        <button onClick={() => setItem('8')}>8</button>
        <button onClick={() => setItem('9')}>9</button>
        <button onClick={() => setItem('0')}>0</button>
      </div>

      <div className="actions">
        {/* <button onClick={() => useState('-')}>+</button> */}
        {/* <button onClick={showItems('a')}>-</button> */}
      </div>
    </div>
  );
}

export default App;