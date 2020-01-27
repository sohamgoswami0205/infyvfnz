import React from 'react';

import '../../CSS/Common/Button.css';

const Button = props => {
    return(
        <button className={props.btnType} disabled={props.disabled} onClick={()=>{props.onClick()}}>{props.children}</button>
    );
}

export default Button;