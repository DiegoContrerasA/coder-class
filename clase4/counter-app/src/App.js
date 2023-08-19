import { useState } from 'react'

import Button from './components/Button'
import MiTitulo from './components/Title'

// let text = document.querySelector('span')
// document.querySelector('button').addEventListener('click', () => {
//   text.innerHTML = 'nuevo'
// })

//App -> index.html
const App = () => {

  const [text, setText] = useState('Texto inicial')
  //text -> 'Texto inicial'

  const [counter, setCounter] = useState(1)
  //counter -> 1

  const handleSetText = () => {
    setText('Cambiando mi primer estado')
     //text -> 'Cambiando mi primer estado'
  }

  const handleSetCounter = () => {
    setCounter(counter + 1) // counter + 1 = 2 
    setCounter(counter + 1) // counter + 1 = 2 
    setCounter(counter + 1) // counter + 1 = 2 

     setCounter((prevCounter) => prevCounter + 1 ) // -> prevCounter = 1 + 1 = 2
     setCounter((prevCounter) => prevCounter + 1 )  // -> prevCounter = 2 + 1 = 3 
     setCounter((prevCounter) => prevCounter + 1 )  // -> prevCounter = 3 + 1 = 4
  }


  return (
    <div>
       <MiTitulo 
        text='Este es mi nuevo titulo'
        id='titulo'
        className='title'
       />
       {text}
       <br />
       <br />
      <Button
       text='Cambiar el texto'
       onClick={handleSetText}
        />

        <Button
          text={`Contador : ${counter}`}
          onClick={handleSetCounter}
        />
    </div>
  );
}

export default App;
