import React from 'react'

export default function BasicFigure(props) {

    return (

        <div52>
            <img src={props.url} alt={props.caption} style={{ width: "100px", height: "100px" }} />
            <p>{props.caption}</p>
            <button onClick={props.onRemove}>Remove</button>
        </div52>

    )
}