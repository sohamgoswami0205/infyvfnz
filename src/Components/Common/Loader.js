import React from 'react';
import Loader from 'react-loader-spinner';

import '../../CSS/Common/Loader.css';

const Spinner = props => {
    return(
        <div className="loader">
            <Loader type="Circles" color="#02F4DD" height={125} width={125} timeout={3000}/>
        </div>
    );
}

export default Spinner;
