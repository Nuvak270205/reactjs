import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import ReducerContext from './components/ReducerContext';
import Redux from './components/Redux';
import Redux_toolkit from './components/Redux_toolkit';
import Recoil from './components/Recoil';
const menu = [
  {
    name: 'Reducer Context',
    to : '/'
  },
  {
    name: 'Redux',
    to : '/redux'
  },
  {
    name: 'Redux Toolkit',
    to : '/rtk'
  },
  {
    name: 'Recoil',
    to : '/recoil'
  }
]
function App() {
  const [active, setActive] = useState(0);
  return (
    <Router>
      <div className='menu'>
          {menu.map((item, index) => (
            <Link key={index} onClick={() => setActive(index)} className={`nav-link ${index === active ? 'active' : ''}`} to={item.to}>{item.name}</Link>
          ))}
        </div>
        <Routes>
          <Route path="/" element={<ReducerContext />}/>
          <Route path="/redux" element={<Redux />} />
          <Route path="/rtk" element={<Redux_toolkit />} />
          <Route path="/recoil" element={<Recoil />} />
          <Route path="*" element={<ReducerContext />} />
        </Routes>
      </Router>
  );
}

export default App;
