import { useState } from "react"

export const withCounter = (Component,  { initialValues = 0 } = {}) =>  {
    return (props) => {
       
        const [counter, setCounter] = useState(initialValues)

        const handleSetCounter = () => {
          setCounter( currentCounter => currentCounter + 1)
        }
    
        const handleMultiply = (valor = 2) => {
            setCounter( currentCounter => currentCounter * valor)
        }
      
       return (
        <Component
            counter={counter}
            handleSetCounter={handleSetCounter}
            handleMultiply={handleMultiply}
            initial={initialValues}
            {...props}
        />
       )

    }
}
