import React from 'react'
import Navigation from '../navigation/nav'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1 className='homeText'>Home</h1>
      <div id='homeDiv'>
        <Navigation />
        <h1 id='textInHome'>Select the Experiment You want to See</h1>
      </div>
    </div>
  )
}

export default Home