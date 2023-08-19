const ButtonTwo = () => {

    const handleOnClick = () => {
      alert('ejemplo de boton con funcionalidad interna')
    }
  
    return (
      <button onClick={handleOnClick}>
        Enviar unica alerta
      </button>
    )
  }

  export default ButtonTwo
  