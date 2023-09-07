import './App.css';
import NavBar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/Login'
import Products from './pages/Products'
import Detail from './pages/Detail'
import MyAccount from './pages/MyAccount'
import { useState } from 'react';
import ProtectedRoute from './ProtectedRoute';

//Pagina => todo // logica.
//componentes => nuestras ayuda UI o elementos que se repiten.

function App() {

  const [session, setSession] = useState(null)

  const handleSetSession = (user) => {
    setSession(user)
  }

  return (
    <BrowserRouter>
      <NavBar user={session} />
      <main className='pt-[100px]'>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/login' element={<SignIn onLogin={handleSetSession} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Detail />} />
          <Route path='/my-account' element={
            <ProtectedRoute session={session}>
              <MyAccount onLogout={handleSetSession} user={session} />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;


