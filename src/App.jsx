import './App.css'
import Detalles from './Components/Detalles';
import DetallesGuardados from './Components/DetallesGuardados';
import Layout from './Components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Detalles" element={<Detalles />} />
          <Route path="/DetallesGuardados" element={<DetallesGuardados />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
