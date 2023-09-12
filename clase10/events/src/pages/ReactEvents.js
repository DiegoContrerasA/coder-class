const ReactEvents = () => {

    const handleLink = (event) => {
        //detemos el comportamiento por defecto del link
        event.preventDefault()

        //aqui podemos agregar logica 


        //enviamos a nuestro usuario a la pagina que debe ir
        window.open(event.target.href, 'blank')
    }

    const handleOnFocus = (event) => {
        console.log('onFocus', event)
    }


    //esta forma de recibir el parametro y el siguiente son muy parecidos, pueden usar la que mas les guste
    const handleBlurWithParams = (number) => {
        console.log('onFocus', number)
    }

    const handleMouseEnterWithEventAndParameters = (event) => (number) => {
        console.log('onFocus', number)
    }
    return (
        <section className="max-w-5xl m-auto">
            <h1 className="text-center text-4xl font-bold">Manual Events</h1>
            <div className="mb-4">
                <a onClick={handleLink} href="https://www.coderhouse.com.co/" target="blank">
                    link to coderhose
                </a>
            </div>
            <button
                className="block mt-8 w-full max-w-[200px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-center"
                onClick={(event) => {
                    console.log('onClick', event)
                }}

                onFocus={handleOnFocus}

                onBlur={(event) => handleBlurWithParams(5)}

                onMouseEnter={handleMouseEnterWithEventAndParameters}
            >
                Button with events

            </button>

        </section>
    )
}

export default ReactEvents