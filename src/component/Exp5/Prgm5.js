import React, { useState } from 'react'
import FigureList from './FigureList';

export default function Prgm5() {

    const [figures, setFigures] = useState([
        { id: 1, url: 'https://picsum.photos/seed/1/150/150', caption: 'Image 1' },
        { id: 2, url: 'https://picsum.photos/seed/2/150/150', caption: 'Image 2' },
    ])

    const addFigure = () => {
        let newFigure;
        if (figures.length === 0) {
            newFigure = { id: 1, url: 'https://picsum.photos/seed/1/150/150', caption: 'Image 1' }
        } else {
            const tempObj = figures[figures.length - 1]
            newFigure = {
                id: tempObj.id + 1,
                url: `https://picsum.photos/seed/${tempObj.id + 1}/150/150`,
                caption: `Image ${tempObj.id + 1}`
            }
        }

        setFigures([...figures, newFigure]);
    };

    const removeFigure = (id) => {
        setFigures(figures.filter((figure) => figure.id !== id))
    };

    return (
        <div5>
            <h1>5. Image Gallery</h1>
            <button onClick={addFigure}>Add Image</button>

            {figures.length === 0 ?
                (<p>Add Images</p>) :
                (<FigureList figures={figures} onRemoveFigure={removeFigure} />)}


        </div5>
    )

}