import React from 'react';
import './Homeprops.css'
    
const HomeProps=({title, pubDate, author, id, thumbnail, handleClick})=>{
    return(
        <div>
            <p className="text"onClick={handleClick}>{title}</p>
            <p>{pubDate}</p>
            <p>{author}</p>
            <p>{id}</p>
        </div>
    )
}

export default HomeProps; 