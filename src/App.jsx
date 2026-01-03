import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Menu from "./Pages/Menu.jsx"



const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/Giulato" element={<Home />} />
        <Route path="/Giulato/menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
