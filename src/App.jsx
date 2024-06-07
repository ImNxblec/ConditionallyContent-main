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
      {showWarning && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleHideWarning}>Proceed</button>
        </div>)}
        <button onClick={handleShowWarning}>Delete</button>
      </div>    
    </>
  /*     Usamos show aqui por que es una variable de estado boolean y puede ser true o false
  Si showWarning es true, se renderiza el contenido dentro de los paréntesis.
  Si showWarning es false, no se renderiza nada de lo que está dentro de los paréntesis.
  El operador lógico && / AND en JavaScript devuelve el primer valor falso que encuentra 
  o el último valor si todos son verdaderos. -Carlos Dimitrakis*/
  )
}

export default App
