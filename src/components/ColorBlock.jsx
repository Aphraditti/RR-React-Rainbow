import React from "react";

function ColorBlock({color}) { // Same as using (prop.color)
    let style= { 'backgroundColor': color }
        return <div className="ColorBlock" style={style}>
            <p>{color}</p>
        </div>
}

export default ColorBlock