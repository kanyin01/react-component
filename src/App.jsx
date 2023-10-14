import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import NavbarCom from './components/NavbarCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarCom />
      <div className='container containerBox'>
        <h1>Welcome to React</h1>
        <ProductCard />
      </div>
    </>
  )
}

export default App
