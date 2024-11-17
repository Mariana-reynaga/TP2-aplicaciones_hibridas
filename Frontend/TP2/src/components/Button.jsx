import React from "react";
import { NavLink } from 'react-router-dom'

function Button(props) {
    return(
        <button className="bg-secondary px-4 py-2 rounded-md me-4">
            <NavLink to={props.link}>
                {props.title}
            </NavLink>
        </button>
    )
}

export default Button;