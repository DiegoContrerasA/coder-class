import { useState } from "react"

const Counter = ({children, initial = 0}) => {

    const [counter, setCounter] = useState(initial)

    const handleSetCounter = () => {
      setCounter( currentCounter => currentCounter + 1)
    }

    const handleMultiply = (valor = 2) => {
        setCounter( currentCounter => currentCounter * valor)
    }

    return (
        <div>
            { children({
                counter,
                handleSetCounter,
                handleMultiply,
                initial
            })}
        </div>
    )
}

export default Counter