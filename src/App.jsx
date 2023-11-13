import './App.css'

import { Routes, Route, Navigate } from 'react-router'

import Login from '@/pages/login'
import NotFound from '@/pages/404'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Navigate to={'/login'}/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
