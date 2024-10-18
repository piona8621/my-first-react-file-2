import { useState } from "react"

export  default  function Counter(){
  const [count , setCount]= useState(0);
  
  const handleAdd = () => {
    const newConst = count + 1;
    setCount(newConst)
  }

  const handleReduce = () => {
   const newCount = count  - 1;
   setCount(newCount)
  }

     return (
      <div style={{border:"2px solid yellow"}}>
        <h3>Counter: {count}</h3>
        <button onClick={handleAdd}>add click</button>
        <button onClick={handleReduce}>Reduce</button>
      </div>
     )
}