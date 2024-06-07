import { Instructions } from './components/Instructions'
import './App.css'

function App() {
  
  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>
      
      <div>
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button>Proceed</button>
        </div>
        <button>Delete</button>
      </div>    
    </>
  )
}

export default App
