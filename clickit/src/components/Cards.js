import React from "react"

const Cards = (props) => (
    <div className="card-block">
        <img className="card-img-top" width="200px" height="200px" alt="some image" src={props.image} onClick={() => props.handleChange(props.name, props.id)} />
    </div>
);

export default Cards