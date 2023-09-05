import Counter from "../../rederProps/Counter"


const Contador3 = () => {
    return (
      <Counter initial={5}>
       {
        ({counter, initial, handleMultiply}) => (
          <>
          <h1>Contador de entregas {counter} valor inicial {initial}</h1>
        
          <button onClick={() => handleMultiply(4)}>
            Counter
          </button>
          </>
        )
       }
      </Counter>
    )
  }

  export default Contador3
  