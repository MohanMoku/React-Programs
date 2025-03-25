import React from 'react'
import BasicFigure from './BasicFigure'

export default function FigureList(props) {
    return (
        <div51>
            {props.figures.map((figure) => (
                <BasicFigure
                    key={figure.id}
                    url={figure.url}
                    caption={figure.caption}
                    onRemove={() => props.onRemoveFigure(figure.id)}
                />
            ))}
        </div51>
    )
}