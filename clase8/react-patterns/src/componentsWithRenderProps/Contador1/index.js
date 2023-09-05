import Counter from '../../rederProps/Counter'
const Contador1 = ({ initial }) => {
  
  
    return (
      <Counter initial={initial}>
       {
       ({counter,
        handleSetCounter,
        handleMultiply,
        initial}) => {
          return (
            <>
              <h1>Contador de tareas {counter}</h1>
              <button onClick={handleSetCounter}>
                Counter
              </button>
            </>
          )
       }
       }
      </Counter>
    )
  }

  export default Contador1