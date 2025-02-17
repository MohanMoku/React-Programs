import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Exp2.css'

const symbol = String.fromCharCode(169)
const title = '2. React Props Demonstration'
const tagline = 'Building dynamic apps with React'
const copyright = symbol + ' 2025 React Lab. All Rights Reserved.'

const Exp2 = () => {

  return (
    <div className='Exp2'>
      <Header title={title} />
      <p>{tagline}</p>
      <Footer copyright = {copyright} />
    </div>
  )
}

export default Exp2