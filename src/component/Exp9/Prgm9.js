import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'

function Prgm9() {
    return (
        <div9>
            <BrowserRouter>
                <div91>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </div91>
            </BrowserRouter>
        </div9>
    )
}

export default Prgm9