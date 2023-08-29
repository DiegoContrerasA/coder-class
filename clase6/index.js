const getUser = (name) => {
    return new Promise((resolve, reject) => {
        //se demore 3 segundos en resolver
        if(name === 'diego')  return resolve({ id: 1 })
        return reject({ estado: 404 })
    })
}

//  promise
//  .then(
//     (respuesta) => {
//      console.log({respuesta})
//     },
//     (error) => {
//         console.log({error})
//     })



//esto se ejecuta temporalmente en otro proceo
// const respuesta = getUser('diego')
// .then((response) => {
//    //aqui adentro

// }).catch((error) => {
//    if(error.estado === 404) console.log('El usuario no fue encontrada')
//    if(error.estado === 500) console.log('Hay problemas con la app, intente mas  tarde')
//    if(error.estado === 400) tconsole.log('Por favor verifique el formulario')

//   // throw new Error('mensaje de error')
// }).catch(err => {
//    console.log(err.message)
//})finally(() => console.log('esto se ejecuta siempre'))

getUser().then(

)

let loading = false

const asynGetUser = async () => {
    loading = true
    try {
       await getUser('getUser')
      // loading = false
    } catch (error) {
        if (error.estado === 404) console.log('El usuario no fue encontrada')
        if (error.estado === 500) console.log('Hay problemas con la app, intente mas  tarde')
        if (error.estado === 400) tconsole.log('Por favor verifique el formulario')
        //loading = false
    }finally{
        loading = false
}
}

asynGetUser()

loading === true ? 'cargando...' : 'resppuesta || error'












