import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import ReactEvents from './pages/ReactEvents';
import ManualEvents from './pages/ManualEvents';
import PageEvents from './pages/PageEvents';


function App() {



  return (
    <BrowserRouter>
    <NavBar />
    <main className='pt-[100px]'>
      <Routes>
        <Route path='/' element={<ReactEvents />} />
        <Route path='/manual-events' element={<ManualEvents/>} />
        <Route path='/page-events' element={<PageEvents />} />
      </Routes>
    </main>
    </BrowserRouter>
    
  );
}

export default App;
