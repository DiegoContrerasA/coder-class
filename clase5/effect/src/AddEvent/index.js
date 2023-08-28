import { useEffect, useState } from "react"

const AddEvent = () => {

    const [width, setWidth] = useState()

    useEffect(() => {
        // Creamos una función para actualizar el estado con el clientWidth
        const updateWidth = () => {
            const width = document.body.clientWidth
            console.log(`updateWidth con ${width}`)
            setWidth(width)
        }
        // Actualizaremos el width al montar el componente
        updateWidth()
        // Nos suscribimos al evento resize() de window
        window.addEventListener("resize", updateWidth)

        return () => {
            // eliminamos la suscripción al evento resize() de window
            window.removeEventListener("resize", updateWidth)
        }
    }, [])

    return (
        <code>
            {width}
        </code>
    )
}

export default AddEvent