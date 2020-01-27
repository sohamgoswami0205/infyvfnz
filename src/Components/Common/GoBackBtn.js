import React from 'react';

import {withRouter} from 'react-router-dom';

import '../../CSS/Common/GoBackBtn.css';

class GoBackBtn extends React.Component {
    goBackHandler = () => {
        let url = window.location.href;
        if (url.includes("photos")) {
            this.props.history.push("/albums");
        }
        else if (url.includes("albums")) {
            window.location.assign("/");
        }
    }
    render() {
        return (
            <button className="goBackBtn" onClick={this.goBackHandler} title={"Go Back"}>&lt;&lt;</button>
        );
    }
}
export default withRouter(GoBackBtn);