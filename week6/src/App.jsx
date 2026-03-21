import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Produce from './components/Produce'
import ProduceDetail from './components/ProduceDetail'
import NotFound from './components/NotFound'
import DashboardLayout from './layout/DashboardLayout'
import Orders from './components/Orders'
import Settings from './components/Settings'
import Profile from './components/Profile'
import CheckOut from './components/CheckOut'
function App() {

  
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='produce' element={<Produce />}>
              <Route path=':id' element={<ProduceDetail />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardLayout />}>
            <Route path='profile' element={<Profile />} />
            <Route path='orders' element={<Orders />} />
            <Route path='settings' element={<Settings />} />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
