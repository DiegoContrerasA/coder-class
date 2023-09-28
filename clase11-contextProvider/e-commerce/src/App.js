import ItemListContainer from 'pages/ItemListContainer'
import NavBar from 'components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from 'pages/NotFound'
import Cart from 'pages/Cart'
import ItemDetailContainer from 'pages/ItemDetailContainer'
import CartProvider from 'context/CartProvider'
import { useTheme } from 'context/ThemeProvider'
import AuthProvider from 'context/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from 'pages/Register'
import Login from 'pages/Login'
import PublicRoute from 'route/PublicRoute'
import PrivateRoute from 'route/PrivateRoute'
import Checkout from 'pages/Checkout'
import MyOrders from 'pages/MyOrders'
import AddProduct from 'pages/Admin/AddProduct'
import { useEffect } from 'react'
import { uploadProducts } from 'firebaseConfig/services/bulkProducts'

function App () {
  const { theme } = useTheme()

  return (
    <AuthProvider>
      <ToastContainer theme='colored' />
      <CartProvider>
        <main id='rootApp' className={theme}>
          <div id='theme'>
            <BrowserRouter>
              <NavBar />
              <main className='max-w-5xl mx-auto pt-[100px]'>
                <Routes>
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path='category/:categoryId' element={<ItemListContainer />} />
                  <Route path='item/:id' element={<ItemDetailContainer />} />
                  <Route
                    path='orders' element={
                      <PrivateRoute>
                        <MyOrders />
                      </PrivateRoute>
                 }
                  />
                  <Route
                    path='checkout' element={(
                      <PrivateRoute>
                        <Checkout />
                      </PrivateRoute>)}
                  />
                  <Route path='cart' element={(<Cart />)} />
                  <Route
                    path='auth/sign-up' element={
                      <PublicRoute>
                        <Register />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path='auth/sign-in' element={
                      <PublicRoute>
                        <Login />
                      </PublicRoute>
                    }
                  />
                  <Route path='admin/add-product' element={<AddProduct />} />
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
