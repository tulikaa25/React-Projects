
import './App.css';
import {useState }from "react";
function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler()
  {
    setCount(count-1);
  }
  function increaseHandler()
  {
    setCount(count+1);
  }
  function resetHandler()
  {
    setCount(0);
  }
  return (
    <div className='wrapper'>
      <div className='heading'>Increment & Decrement</div>
      <div className='content'>
        <button className='buttonstyle' onClick={decreaseHandler}>-</button>
        <div className='buttonstyle'>{count}</div>
        <button className='buttonstyle' onClick={increaseHandler}>+</button>
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
