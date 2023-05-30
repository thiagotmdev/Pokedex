import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import { NotFound } from './pages/notfound';

import './App.css'
import { Header } from './components/Header';

function App() {


  return (
    <>
    <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
