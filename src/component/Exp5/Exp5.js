import React, { useState } from "react";
import FigureList from "./FigureList";

const Exp5 = () => {
    const [figures, setFigures] = useState([
        { id: 1, url: "https://picsum.photos/seed/1/150/150", caption: "Image 1" },
        { id: 2, url: "https://picsum.photos/seed/2/150/150", caption: "Image 2" },
    ]);

    const addFigure = () => {
        const newFigure = {
            id: figures.length + 1,
            url: `https://picsum.photos/seed/${figures.length + 1}/150/150`,
            caption: `Image ${figures.length + 1}`,
        };
        setFigures([...figures, newFigure]);
    };

    const removeFigure = (id) => {
        setFigures(figures.filter((figure) => figure.id !== id));
    };

    return (
        <div>
            <h1>5. Image Gallery</h1>
            <button onClick={addFigure}>Add Image</button>
            <FigureList figures={figures} onRemoveFigure={removeFigure} />
        </div>
    );
}

export default Exp5;