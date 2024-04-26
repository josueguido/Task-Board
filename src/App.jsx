import './App.css'
import Detalles from './Components/Detalles';
import Layout from './Components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Detalles" element={<Detalles />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
