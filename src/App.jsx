import { useState } from 'react'
import { Instructions } from './components/Instructions'
import './App.css'

function App() {
  const [showWarning, setShowWarning] = useState(false);

  const handleShowWarning = () => {
    setShowWarning(true);
  };

  const handleHideWarning = () => {
    setShowWarning(false);
  };
  
  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>
      <div>
      {showWarning ? (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleHideWarning}>Proceed</button>
        </div>) : (
        <button onClick={handleShowWarning}>Delete</button>)}
      </div>    
    </>
  )
}

export default App
