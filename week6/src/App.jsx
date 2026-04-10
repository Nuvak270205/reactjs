import { useState, createContext } from 'react'
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
import Dashboard from './components/Dashboard'
import ProtectedRoute from './router/ProtectedRoute'
import Signin from './components/Signin'

export const UserContext = createContext()
function App() {

  const [user, setUser] = useState(false);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='checkout' element={<CheckOut />} />
                <Route path='produce'>
                  <Route index element={<Produce />}/>
                  <Route path=':id' element={<ProduceDetail />} />
                </Route>
                <Route path='*' element={<NotFound />} />
              </Route>
            </Route>
            <Route path='/login' element={<Signin />}/>
          </Routes>
        </BrowserRouter>
        {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/dashboard' element={<DashboardLayout />}>
              <Route path='/dashboard/profile' element={<Profile />} />
              <Route path='/dashboard/orders' element={<Orders />} />
              <Route path='/dashboard/settings' element={<Settings />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter> */}

      </div>
    </UserContext.Provider>
  )
}

export default App
