import React, { useState } from 'react'

const Prgm3 = () => {

    const [counter, setCounter] = useState(0)
    const [step, setStep] = useState(1)

    const increment = () => {
        setCounter(counter + step)
    }

    const decrement = () => {
        if (counter - step >= 0) {
            setCounter(counter - step)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    const handleStepChange = (e) => {
        const newStep = parseInt(e.target.value)
        setStep(newStep > 0 ? newStep : 1)
    }

    return (
        <div3>
            <h1>3. Counter Application</h1>
            <h2>Current Count: {counter}</h2>
            <div31>
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
            </div31>

            <div32>
                <label>
                    Step Value:
                </label>

                <input
                    type="number"
                    value={step}
                    onChange={handleStepChange}
                />

            </div32>

        </div3>
    )
}

export default Prgm3