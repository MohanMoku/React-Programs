import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Exp1 from './component/Exp1/Exp1'
import Exp2 from './component/Exp2/Exp2'
import Exp3 from './component/Exp3/Exp3'
import Exp4 from './component/Exp4/Exp4'


const App = () => {

  return (
    <div className='AppBody'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/experiment-1' element={<Exp1 />} />
          <Route exact path='/experiment-2' element={<Exp2 />} />
          <Route exact path='/experiment-3' element={<Exp3 />} />
          <Route exact path='/experiment-4' element={<Exp4 />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
