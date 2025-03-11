import React, { useState } from 'react'

const Prgm1 = () => {

    const [text, setText] = useState('')

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div1>
            <h1>1. Dynamic Text Update</h1>
            <input
                type= "text"
                placeholder='Type Something and see Magic...'
                value={text}
                onChange={onChangeText}
            />
            <h1 className='output'>{text}</h1>
        </div1>
    )
}

export default Prgm1