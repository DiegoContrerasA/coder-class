import { useCounter } from "../../hooks/useCounter"



const Contador3 = () => {

    /**
     const [counter, setCounter] = useState(initial)
  
    const handleSetCounter = () => {
      setCounter(prev => prev + 1)
    }

     */

    const {counter, initial, handleMultiply} = useCounter(2)

    const handleOnClick = () => {
        handleMultiply(13)
    }

    return (
      <div>
        <h1>Contador de entregas {counter} valor inicial {initial}</h1>
        
        <button onClick={handleOnClick}>
          Counter
        </button>
      </div>
    )
  }

  export default Contador3
  