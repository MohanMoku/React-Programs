import React from 'react'

const BasicFigure = ({url, caption, onRemove}) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
            <img src={url} alt={caption} style={{ width: "100px", height: "100px" }} />
            <p>{caption}</p>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}

export default BasicFigure