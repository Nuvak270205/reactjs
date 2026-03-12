import { useState } from 'react'
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import New from './page/New'
import Setting from './page/Setting'
import Dashboard from './page/Dashboard'
import Wifi from './page/Wifi'

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "new",
        element: <New />
      },
      {
        path: "setting",
        children: [
          {
            index: true,
            element: <Setting />
          },
          {
            path: "wifi",
            element: <Wifi />
          }
        ]
      }
    ]
  }
]);
  
  return (
    <>
    
      {/* /// Declarative Routing
      <Router>
        <nav>
          <a href="/">Home</a>
          <a href="/new">New</a>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </Router> */}

      {/* /// Nested Routing */}
      {/* <Router>
        <nav>
          <a href="/">Home</a>
          <a href="/Dashboard/new">New</a>
          <a href="/Dashboard/setting">Setting</a>
          <a href="/Dashboard/setting/wifi">Wifi</a>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Dashboard' element={<Dashboard />} >
            <Route path='new' element={<New />} />
            <Route path='setting'>

              <Route index element={<Setting />} />
              <Route path='wifi' element={<Wifi />} />
            </Route>
          </Route>
        </Routes>
      </Router> */}
      <nav>
          <a href="/">Home</a>
          <a href="/Dashboard/new">New</a>
          <a href="/Dashboard/setting">Setting</a>
          <a href="/Dashboard/setting/wifi">Wifi</a>
        </nav>
      <RouterProvider router={router} />
    </>
  )
}

export default App
