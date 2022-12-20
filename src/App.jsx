import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Analytics from './pages/Analytics'
import { useState } from 'react'


function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "John"
    })
  }

  const logout = () => setUser(null)

  return (
    <BrowserRouter>

      <Navigation />
      <div className='text-center'>
        {
          user ? (
            <button className='bg-red-500' onClick={logout}>Logout</button>
          ) : (
            <button className='bg-green-500' onClick={login}>Login</button>
          )
        }
      </div>

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )

  function Navigation() {
    return <nav className='bg-blue-900'>
      <ul className='flex justify-around text-white '>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  }
}

export default App
