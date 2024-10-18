
import './App.css'
import Counter from './counter'
import Team from './Team'
import User from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('click here')
  }

  const  handleClick2 = () => {
    alert('button 2 click')
  }

  const addToFive = (num) => {
     alert(num + 5);
  }
  
  return (
    <>
      
      <h3>React core concept 2</h3>

      <Friends></Friends>
       
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me </button>
      <button onClick={handleClick2}> click2 </button>
      <button onClick={() => {alert ('third clicked')}}>third clicked </button>
      {/* difernt item */}
      <button onClick={() => addToFive(5)}>five</button>
    </>
  )
}

export default App
