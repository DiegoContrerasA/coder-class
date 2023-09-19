import ItemListContainer from 'pages/ItemListContainer'
import NavBar from 'components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from 'pages/NotFound'
import Cart from 'pages/Cart'
import ItemDetailContainer from 'pages/ItemDetailContainer'
import CartProvider from 'context/CartProvider'
import { useTheme } from 'context/ThemeProvider'
import AuthProvider from 'context/AuthProvider'
// import Skeleton from 'components/Skeleton'

// useState

// Regla # 1
function App () {
  const { theme } = useTheme()
  return (
    <AuthProvider>
      <CartProvider>
        <main id='rootApp' class={theme}>
          <div id='theme'>
            <BrowserRouter>
              <NavBar />

              <main className='max-w-5xl mx-auto pt-[100px]'>
                {/* Aqui les dejo un ejemplo de un custom skeleton */}
                {/* <Skeleton wigth={40} heigth={100} /> */}
                <Routes>
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path='category/:categoryId' element={<ItemListContainer />} />
                  <Route path='item/:id' element={<ItemDetailContainer />} />
                  <Route path='cart' element={<Cart />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </main>
            </BrowserRouter>
          </div>
        </main>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
