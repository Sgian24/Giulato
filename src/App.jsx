import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Menu from "./Pages/Menu.jsx"
import Order from "./Pages/Order.jsx"



const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  )
}

export default App
