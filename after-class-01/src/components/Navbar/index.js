import './styles.css'

const Navbar =  ({onChangeTheme, theme}) => {
    return (
         <nav className="navContainer mb">
             <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a  href="/">Catalogo</a>
                </li>
                <li>
                    <a  href="/">Contacto</a>
                </li>
                </ul>
                <button onClick={onChangeTheme}>
                    {theme ? 'ligth' : 'Dark'}
                </button>
         </nav>
    )
} 

export default Navbar