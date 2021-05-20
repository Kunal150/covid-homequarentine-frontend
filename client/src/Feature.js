import React from 'react';
import "./Feature.css";

function Feature({title,image,buttons})
{
        return (
        <div className="feature">
            <div className="feature__info">
                <p>{title}</p>
            </div>
            <img
            src={image}
            />
            
        </div>
    )   
}

export default Feature
