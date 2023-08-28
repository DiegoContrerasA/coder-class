import { useEffect, useState } from "react"

const GetData = () => {

    const [data, setData] = useState({})


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json))
      
    /*
    Aquí es importante poner el array vacio para evitar que esto se ejecute 
    infinitas veces
    */
    }, [])

    return (
        <pre>
            {JSON.stringify(data, 2, null)}
        </pre>
    )
}

export default GetData