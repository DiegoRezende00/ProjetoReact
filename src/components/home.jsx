import React from "react";
import {Link} from 'react-router-dom'

export default function Home( {title} ){
    return (
        <div className="cursor-pointer">
            <Link to={`/`}>{title}</Link>     
        </div>
    );
}