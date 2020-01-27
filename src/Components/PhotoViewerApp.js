import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';

import "../CSS/PhotoViewerApp.css";
import Footer from './Footer';

class PhotoViewerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initializeHeader: true
        }
    }
    componentDidMount() {
        let route = window.location.href.split(window.location.host)[1];
        if(route === "/"){
            this.setState({initializeHeader: true});
        }
        else{
            this.setState({initializeHeader: false});
        }
    }
    render() {
        return (
            <div>
                <Header headerDisabled={this.state.initializeHeader} />
                <main className="photoViewerBody">
                    <div className="photoViewerContainer">
                        {this.props.children}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
export default withRouter(PhotoViewerApp);