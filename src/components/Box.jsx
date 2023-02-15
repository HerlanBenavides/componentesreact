import React from "react";

const Box = ({ photo, model, year, price, type }) => {
    return (
        <div>
            <div className="imagen">
                <img src={photo} alt="" />
            </div>
            <div className="cuadroDescripcion">
                <div className="model">{model}</div>
                <div className="year">{year}</div>
                <div className="price">{price}</div>
                <div className="type">{type}</div>
            </div>
        </div>
    );
};

export default Box;
