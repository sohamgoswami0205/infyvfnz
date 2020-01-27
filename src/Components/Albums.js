import React from 'react';
import axios from 'axios';
import ResponseChecker from '../Utils/ResponseChecker';
import Gallery from './Common/Gallery';
import GoBackBtn from './Common/GoBackBtn';
import Loader from './Common/Loader';
import { withAlert } from 'react-alert';

import '../CSS/Albums.css';

class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumsGallery: null,
            fetchedUsers: [],
            loaderStatus: false,
            timeout: null,
            urls: {
                fetchAlbums: "http://jsonplaceholder.typicode.com/albums",
                fetchUsers: "http://jsonplaceholder.typicode.com/users"
            }
        }
    }
    componentDidMount() {
        this.loadUsers(); // INTERNALLY CALLS LOADALBUMS
    }
    componentWillUnmount(){
        clearTimeout(this.state.timeout);
    }
    loadUsers = () => {
        this.setState({loaderStatus: true});
        this.handleLoaderTimeout();
        axios.get(this.state.urls.fetchUsers)
            .then((response) => {
                if (ResponseChecker.checkResponse(response, "fetchUsers")) {
                    let resData = response.data;
                    this.setState({ fetchedUsers: resData });
                    this.loadAlbums();
                }
            })
            .catch((error) => {
                ResponseChecker.createCatchedErrorMessage(error, "fetchUsers");
            })
    }
    fetchUserDetails = (userId, attribute) => {
        for (let i = 0; i < this.state.fetchedUsers.length; i++) {
            if (this.state.fetchedUsers[i].id === userId) {
                return ((this.state.fetchedUsers[i])[attribute]);
            }
        }
    }
    loadAlbums = () => {
        const alert = this.props.alert;
        axios.get(this.state.urls.fetchAlbums)
            .then((response) => {
                if (ResponseChecker.checkResponse(response, "fetchAlbums")) {
                    let renderAlbums = [];
                    let resData = response.data;
                    let userDetails = "";
                    for (let i = 0; i < resData.length; i++) {
                        userDetails = <span><strong>ALBUM ID: {resData[i].id}</strong><br /><strong>TITLE: </strong><br />{resData[i].title}<br /><br /><strong>USER NAME: </strong><br />{this.fetchUserDetails(resData[i].userId, "name")}</span>;
                        renderAlbums.push(<Gallery key={resData[i].id} album={true} title={resData[i].title} onClick={() => { this.props.history.push("/photos/" + resData[i].id) }}>{userDetails}</Gallery>);
                    }
                    this.setState({ albumsGallery: renderAlbums, loaderStatus: false });
                    alert.success("Albums Loaded Successfully!");
                }
            })
            .catch((error) => {
                ResponseChecker.createCatchedErrorMessage(error, "fetchAlbums");
                alert.error("Albums Loading Failed!");
            })
    }
    handleLoaderTimeout = () => {
        let timeout = setTimeout(()=>{
            this.setState({loaderStatus: false});
        }, 5000);
        this.setState({timeout: timeout});
    }
    render() {
        return (
            <div className="albumContainer">
                <hr />
                <div className="albumGallery">
                    {this.state.albumsGallery}
                </div>
                <hr />
                {this.state.loaderStatus === true?
                    <Loader active={this.state.loaderStatus}/>
                :
                ""}
                <GoBackBtn />
            </div>
        );
    }
}
export default withAlert()(Albums);