import { useState } from "react"

/**
 
const obj= {
  age: 22
}

const EXTERNAL = 'password'

obj.age = 66
obj[EXTERNAL] = 'diego'

console.log({
  ...obj,
  [EXTERNAL]: 'diego'
})

 */

//El form recibe el evento de onLogin
const Form = ({ onLogin }) => {

    //    const [email, setEmail] = useState('')
    //    const [password, setPassword] = useState('')
    //    const [name, setName] = useState('')
    //    const [lastName, setLastName] = useState('')
    //    const [age, setAge] = useState('')

    const [form, setForm] = useState({
        email: '',
        password: '',
    })


    const handleOnChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        //De esta manera podemos modificar el estado de forma dinamica
        setForm(prev => ({
            ...prev,
            [name]: value
        }))


        //   if(name === 'name') return setName(value)
        //   if(name === 'email') return setEmail(value)
        //   if(name === 'password') return setPassword(value)
        //   if(name === 'lastName') return setLastName(value)
        //   if(name === 'age') return setAge(value)


        // const {name, value} = event.target

    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        //lo que tenga que hacer
        //validaciones
        //darle feedback al usuario

        //aqui ejecutamos el metodo de onLogin
        onLogin(form)
    }


    return (
        <>

            <form className="max-w-xl m-auto flex flex-col gap-4">
                <h1 className="font-extrabold text-3xl">Login</h1>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                    <div className="mt-2">
                        <input onChange={handleOnChange} type="text" name="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">password</label>
                    <div className="mt-2">
                        <input onChange={handleOnChange} type="text" name="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <button onClick={handleOnSubmit} className="block mt-8 w-full max-w-[200px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-center">
                    Sign In
                </button>
            </form>
        </>
    )
}

export default Form