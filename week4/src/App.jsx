import { useState } from 'react'
import FetchApiEx1 from './components/FetchApiEx1'
import FetchApiEx2 from './components/FetchApiEx2'
import FetchApiEx3 from './components/FetchApiEx3'
import FetchApiEx4 from './components/FetchApiEx4'
import UserFetch from './components/UserFetch'
function App() {

  
  return (
    <>
      {/* <h3>Danh sach users Ex1</h3>
      <FetchApiEx1 /> */}
      {/* <h3>Danh sach users Ex2</h3>
      <FetchApiEx2 /> */}
      {/* <h3>Tìm kiếm user Ex3</h3>
      <FetchApiEx3 /> */}
      {/* <h3>Tìm kiếm post Ex4</h3>
      <FetchApiEx4 /> */}
      <h3>Tìm kiếm user Ex5</h3>
      <UserFetch />
    </>
  )
}

export default App
