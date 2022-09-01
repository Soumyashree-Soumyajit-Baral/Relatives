
import './App.css';
import React , { useState } from "react"

function App() {
  const [input, setInput]=useState("")
  const [list, setList]=useState([]);
	const handleList=(e)=>{
    if(!input){

    }else{
      setList([...list, input]);
     setInput("")
    }
		
	}
  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  
  const rk="relativeListItem";
  return (
    <div className="App">
      <h1>Relatives</h1>
      <div>
		    <input type="text" placeholder='Write relatives names......' id="task" value={input} onChange={handleInput} ></input>
		    <button id="btn" onClick={handleList}>Enter</button>
		</div>
    <div>
      
        {list.map((k,i)=>{
          
            return <ul key={rk+i++}><li key={rk+i}>{k}</li></ul>
              
          
        })}
      
    </div>
    </div>
  );
}

export default App;