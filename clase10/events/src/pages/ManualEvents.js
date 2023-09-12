import Form from "../components/Form"

const ManualEvents = () => {

    //definimos el evento y lo pasamos al form
    const onLogin = (user) => {
        console.log({ user })
    }

    return (
        <section className="max-w-5xl m-auto">
           <h1 className="text-center text-4xl font-bold">Manual Events</h1>
            <Form onLogin={onLogin} />
        </section>

    )
}

export default ManualEvents