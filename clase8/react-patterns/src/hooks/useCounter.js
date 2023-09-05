import {  useState } from "react"

export const useCounter = (initial = 0) => {
    const [counter, setCounter] = useState(initial)

    const handleSetCounter = () => {
      setCounter( currentCounter => currentCounter + 1)
    }

    const handleMultiply = (valor = 2) => {
        setCounter( currentCounter => currentCounter * valor)
    }
  
    return  {
      counter,
      handleSetCounter,
      initial,
      handleMultiply
    }
  }
  