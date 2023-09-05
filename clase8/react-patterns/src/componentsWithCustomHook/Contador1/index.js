import { useCounter } from "../../hooks/useCounter"

const Contador1 = ({ initial }) => {
    const {counter, handleSetCounter} = useCounter(initial)
  
    return (
      <div>
        <h1>Contador de tareas {counter}</h1>
        <button onClick={handleSetCounter}>
          Counter
        </button>
      </div>
    )
  }

  export default Contador1