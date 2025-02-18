import React from 'react'
import BasicFigure from './BasicFigure'

const FigureList = (figures, onRemoveFigure) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {figures.map((figure) => (
                <BasicFigure
                    key={figure.id}
                    url={figure.url}
                    caption={figure.caption}
                    onRemove={() => onRemoveFigure(figure.id)}
                />
            ))}
        </div>
    )
}

export default FigureList