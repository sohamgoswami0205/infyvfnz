import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PhotoViewerApp from '../Components/PhotoViewerApp';
import Albums from '../Components/Albums';
import Photos from '../Components/Photos';

export default class RouteHandler extends React.Component {
    render() {
        return (
            <Router>
                <PhotoViewerApp>
                    <Route path="/photos/:id" component={Photos} />
                    <Route path="/albums" component={Albums} />
                </PhotoViewerApp>
            </Router>
        );
    }
}