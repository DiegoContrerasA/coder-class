import { useEffect, useState } from 'react';


const Timmer = () => {
  const [laps, setLaps] = useState(0)
  const [timeInSeconds, setTimeInSeconds] = useState(0)

  useEffect(() => {
    setTimeInSeconds(0)

    if(laps === 3) return console.log('esto deberia detenerse')

    const interval = setInterval(() => {
      setTimeInSeconds(prev => prev + 1)
      console.log('test...')
    }, 1000)



    return () => {
      //Esta función solo se ejecuta cuando se desmontda el componente
      clearInterval(interval)
      console.log('cuando se desmonta el componente')
    }

    //el array nos permite escuchar cambios en las 
    //propiedades que estan dentro y asi mismo volver a ejecutar el efecto
  }, [laps])

  return (
    <>
    <button onClick={() => setLaps(prev => prev + 1) }>
        Laps {laps}
    </button>
    <h1>{timeInSeconds}</h1>
    </>
  )
}

export default Timmer