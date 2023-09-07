import { useNavigate } from "react-router-dom"

const MyAccount = ({onLogout, user}) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        onLogout(null)
        navigate('/login')
       
    }
    return (
        <section className="max-w-3xl m-auto flex flex-col">
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff] text-center"
        >
            Protected route {user?.email}
        </h1>
         <button onClick={handleLogout} className="block mt-8 w-full max-w-[200px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-center">
            logout
        </button>
        </section>
      
    )

}

export default MyAccount