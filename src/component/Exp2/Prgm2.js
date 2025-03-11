import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Prgm2 = () => {
    
    const title = "2. React Props Demonstration"
    const tagline = "Building Dynamic Apps with React"
    const copyright = String.fromCharCode(169) + '2025 React lab. All Rights reserved'

    return(
        <div2>
            <Header title = {title} />
            <p>{tagline}</p>
            <Footer copyright = {copyright} />
        </div2>
    )

}

export default Prgm2