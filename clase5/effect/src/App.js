// import AddEvent from "./AddEvent";
// import ChangeTitle from "./ChangeTitle";
// import GetData from "./GetData";
// import Timmer from "./Timmer";
import {useEffect, useState} from 'react'

function App() {

  const [counter, setCounter] = useState(0)

  //console.log('antes del efecto')

  //El Efecto se ejecuta despues de que el componente se monta

  //Recibe 2 valores
  //1 function : Requerida
  //2 array: 
  // - (No recomendado) Cuando no esta, el efecto se ejecuta siempre que hay un cambio en el componente (estado, propiedad)
  // - Cuando el array esta vacio, el efecto se ejecuta 1 sola vez
  // - Cuando tiene parametros el efecto escucha esos parametros y se ejecuta cada vez que cambien

    useEffect(() => {
      console.log('efecto 1')
      //los valores del array son valores que el efecto escucha para volverse a ejecutar 

      return () => {
        console.log('se desmonta el componente')
      }

      }, [counter])
  

  //XXXXXXXXX Esto nunca lo hagan XXXXXXXXXX
  useEffect(() => {
    console.log('efecto 2')
    //los valores del array son valores que el efecto escucha para volverse a ejecutar 
    })

  //console.log('despues del efecto')

  return (
    <div>
      <button onClick={() => setCounter(prev => prev+1)}>
          Contador {counter}
      </button>
    {/* <Timmer />
    <ChangeTitle />
    <GetData />
    <AddEvent /> */}
    </div>
  );
}

export default App;

