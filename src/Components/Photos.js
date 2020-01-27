import React from 'react';
import axios from 'axios';
import ResponseChecker from '../Utils/ResponseChecker';
import Gallery from './Common/Gallery';
import GoBackBtn from './Common/GoBackBtn';
import Loader from './Common/Loader';
import ImageModal from './Common/ImageModal';
import { withAlert } from 'react-alert';

import '../CSS/Photos.css';

class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photosGallery: null,
            albumId: props.match.params.id,
            photosCtr: 0,
            displayFullImage: false,
            imgUrl: "", loaderStatus: false,
            timeout: null,
            urls: {
                fetchPhotos: "http://jsonplaceholder.typicode.com/photos"
            }
        }
    }
    componentDidMount() {
        this.loadPhotos();
    }
    componentWillUnmount(){
        clearTimeout(this.state.timeout);
    }
    loadPhotos = () => {
        const alert = this.props.alert;
        this.setState({ loaderStatus: true });
        this.handleLoaderTimeout();
        let renderPhotos = [];
        let ctr = 0;
        axios.get(this.state.urls.fetchPhotos)
            .then((response) => {
                if (ResponseChecker.checkResponse(response, "fetchPhotos")) {
                    let resData = response.data;
                    for (let i = 0; i < resData.length; i++) {
                        if (resData[i].albumId.toString() === this.state.albumId.toString()) {
                            renderPhotos.push(<Gallery key={resData[i].id} title={resData[i].title} imgUrl={resData[i].url} onClick={() => this.photoClickHandler(resData[i].url)} thumbnailUrl={resData[i].thumbnailUrl}>{resData[i].title}</Gallery>);
                            ctr++;
                        }
                    }
                    if (renderPhotos.length === 0) {
                        renderPhotos = "No Photos for Album ID: " + this.state.albumId;
                    }
                    this.setState({ photosGallery: renderPhotos, photosCtr: ctr, loaderStatus: false });
                    alert.success(ctr + " photos loaded for Album ID: " + this.state.albumId + " successfully!");
                }
            })
            .catch((error) => {
                ResponseChecker.createCatchedErrorMessage(error, "fetchPhotos");
                alert.error("Could not load photos for Album ID: " + this.state.albumId + " !");
            })
    }
    photoClickHandler = (url) => {
        this.setState({ imgUrl: url, displayFullImage: true });
    }
    handleLoaderTimeout = () => {
        let timeout = setTimeout(() => {
            this.setState({ loaderStatus: false });
        }, 5000);
        this.setState({ timeout: timeout });
    }
    render() {
        return (
            <div className="photoContainer">
                <hr />
                <div className="albumIdHolder">IMAGES FOR ALBUM ID: {this.state.albumId}&nbsp;( ALBUM PHOTOS: {this.state.photosCtr} )</div>
                <hr />
                <div className="photoGallery">
                    <GoBackBtn />
                    {this.state.photosGallery}
                </div>
                <hr />
                {this.state.displayFullImage === true ? <ImageModal imgUrl={this.state.imgUrl} closeModal={() => this.setState({ imgUrl: "", displayFullImage: false })} /> : ""}
                {this.state.loaderStatus === true ?
                    <Loader loaderStatus={this.state.loaderStatus} />
                    :
                    ""}
            </div>
        );
    }
}

export default withAlert()(Photos);