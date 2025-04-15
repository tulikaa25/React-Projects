
import './App.css';
import {useState} from 'react';
import Tours from './Components/Tours';
import data from './data';
function App() {
  const[tours,setTours]=useState(data) ;   //initial value got from data file
  function removeTour(id)
  {
      const newTours= tours.filter((tour)=>{
        return tour.id!==id;
      })
      setTours(newTours);
  } 

  if(tours.length===0)
  {
    return(
      <div className='refresh'>
         <h2>No Features Left</h2>
        <button onClick={()=>{setTours(data)}}>Refresh</button>
      </div>
    )
  }
    return (<div>
      <Tours tours={tours} removeTour={removeTour}>
      
    
      </Tours>
      {/* New Button at Bottom */}
      <div className="nav-button-container">
        <a 
          href="EPICS.html" 
          className="nav-button"
        >
          Continue to Next Page
        </a>
      </div>
    </div>)
}
export default App;
