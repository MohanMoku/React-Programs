import React from 'react'
import homeImg from '../../assets/home.png'

const Header = ({ title }) => {

    const goHome = () => {
        window.location.href = '/'
    }

    return (
        <div1>
            <img src={homeImg} alt="home" onClick={goHome}/>
            <h1 style={{ color: 'blue' }}>{title}</h1>
        </div1>

    )
}

export default Header