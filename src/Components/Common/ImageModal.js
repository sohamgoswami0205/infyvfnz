import React from 'react';

import '../../CSS/Common/ImageModal.css';

export default class ImageModal extends React.Component {
    render() {
        return (
            <div className="modalWindow" onClick={()=>this.props.closeModal()}>
                <div className="imgContainer">
                    <img src={this.props.imgUrl} alt={this.props.imgUrl} width="600" height="600" onClick={this.imgClickHandler}/>
                </div>
                <button className="closeModalBtn" onClick={() => this.props.closeModal()} title={"Close"}>+</button>
            </div>
        );
    }
}