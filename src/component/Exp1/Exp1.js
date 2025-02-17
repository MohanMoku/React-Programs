import React, { useState } from 'react'
import './Exp1.css'
import homeImg from '../../assets/home.png'

const Exp1 = () => {

    const [inputText, setInputText] = useState('')

    const handelInputChanges = (e) => {
        setInputText(e.target.value)
    }

    const goHome = () => window.location.href = '/';

    return (
        <div id='exp1'>

            <div1>
                <img src={homeImg} alt="home" onClick={goHome}/>
                <h1>Exp1 Dynamic Text Update</h1>
            </div1>

            <div id='div2'>
                <input
                    type="text"
                    placeholder='Type something...'
                    value={inputText}
                    onChange={handelInputChanges}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        marginBottom: '20px'
                    }}
                />

                <h1>{inputText}</h1>
            </div>


        </div>
    )
}

export default Exp1