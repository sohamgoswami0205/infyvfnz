import React from 'react';

import '../../CSS/Common/Gallery.css';

const Gallery = props => {
    return (
        <div className={props.album === true ? "gallery-album" : "gallery-photo"} onClick={() => props.onClick()} title={props.title}>
            {props.album === true ? "" : <img src={props.thumbnailUrl} alt={props.children} />}
            <div className="desc">{props.children}</div>
        </div>
    );
}
export default Gallery;