import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Menu from "./Pages/Menu.jsx"
import Order from "./Pages/Order.jsx"



const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/Giulato" element={<Home />} />
        <Route path="/Giulato/menu" element={<Menu />} />
        <Route path="/Giulato/order" element={<Order />} />
      </Routes>
    </>
  )
}

export default App
