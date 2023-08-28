import { useEffect } from "react"

const ChangeTitle = () => {


//Este efecto se ejecuta 1 sola vez cuando el componente se monta
    useEffect(() => {
        document.title = 'Nuevo titulo'
    }, [])

    return (
        <h1>Chnage title</h1>
    )
}

export default ChangeTitle