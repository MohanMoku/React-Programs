import React, { useState } from 'react'
import homeImg from '../../assets/home.png'
import './exp3.css'

const Exp3 = () => {

    const [counter, setCounter] = useState(0)
    const [step, setStep] = useState(1)

    const increment = () => {
        setCounter(counter + step)
    }

    const decrement = () => {
        if (counter - step >= 0) {
            setCounter(counter - step)
        }
        // setCounter(counter - step)
    }

    const reset = () => {
        setCounter(0)
    }

    const handleStepChange = (e) => {
        const newStep = parseInt(e.target.value)
        setStep(newStep > 0 ? newStep : 1)
    }

    const goHome = () => window.location.href = '/';


    return (
        <div className='Exp3'>
            <div1>
                <img src={homeImg} alt="home" onClick={goHome} />
                <h1>3. Counter Application</h1>
            </div1>

            <div2>
                <h2>Current Count: {counter}</h2>
                <div>
                    <button
                        onClick={decrement}
                        style={{
                            backgroundColor: '#f44336',
                        }}
                    >Decrease
                    </button>
                    
                    <button
                        onClick={increment}
                        style={{
                            backgroundColor: '#4caf50',
                        }}
                    >Increase
                    </button>

                    <button
                        onClick={reset}
                        style={{
                            backgroundColor: '#2196f3',
                        }}
                    >Reset
                    </button>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <label>
                        Step Value:
                    </label>

                    <input
                        type="number"
                        value={step}
                        onChange={handleStepChange}
                    />

                </div>
            </div2>
        </div>
    )
}

export default Exp3