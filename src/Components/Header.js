import React from 'react';
import Button from './Common/Button';
import {withRouter} from 'react-router-dom';

import '../CSS/Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerDisabled: props.headerDisabled
        }
    }
    componentDidMount = () => {
        let host = window.location.host;
        host += "/";
        if(window.location.href.split(host)[1] && window.location.href.split(host)[1].trim() !== ""){
            this.setState({headerDisabled: true});
        }
        else{
            this.setState({headerDisabled: false});
        }
    }
    generateAlbumsBtnClickHandler = () => {
        this.setState({ headerDisabled: true });
        this.props.history.push("/albums");
    }
    headerHomeClicked = () => {
        window.location.assign("/");
    }
    render() {
        return (
            <header className={this.state.headerDisabled === true ? "header header-disabled" : "header"}>
                <span className="header-txt" onClick={this.headerHomeClicked} title={"Album Viewer Home"}>ALBUM PHOTO VIEWER</span>
                {this.state.headerDisabled === true ?
                    ""
                    :
                    <div className="header-btn-div"><Button btnType="btn btn-default" onClick={this.generateAlbumsBtnClickHandler}>GENERATE ALBUMS</Button></div>
                }
            </header>
        );
    }
}

export default withRouter(Header);