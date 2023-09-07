import { useState } from "react"
import { useNavigate } from 'react-router-dom' 
const Login = ({ onLogin }) => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleOnChange =  (event) => {
        const {value, name } = event.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const session = {email: form.email, password: form.password,  token: 12345}
        // localStorage.setItem('token', JSON.stringify(session))
        onLogin(session)
        navigate('/my-account')
        
    }

    return (
        <form className="max-w-xl m-auto flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <h1 className="font-extrabold text-3xl">Login</h1>
        <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Username</label>
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
        <button type="submit" className="block mt-8 w-full max-w-[200px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-center">
            Sign In
        </button>
    </form>
    )
}

export default Login