import Counter from "../../rederProps/Counter"

const Contador2 = () => {
    return (
     <Counter>
      {
        ({handleSetCounter, counter}) => (
          <>
            <h1>Contador de estudiantes </h1>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
            <button onClick={handleSetCounter}>
              Counter
            </button>
          <h4>El total de estudiantes es {counter}</h4>
        </>
        )
      }
     </Counter>
    )
  }

  export default Contador2