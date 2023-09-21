import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ThemeProvider from 'context/ThemeProvider'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDuXKpGW4qsVvon5cRr6Iaha3NrhbIGQ9g',
//   authDomain: 'e-commerce-coderhouse-278fd.firebaseapp.com',
//   projectId: 'e-commerce-coderhouse-278fd',
//   storageBucket: 'e-commerce-coderhouse-278fd.appspot.com',
//   messagingSenderId: '401625909707',
//   appId: '1:401625909707:web:5333376456c4f35d42ce4e'
// }

// Initialize Firebase
// initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
