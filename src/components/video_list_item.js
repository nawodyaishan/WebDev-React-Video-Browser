import React, {Component} from 'react';

const VideoListItem = ({video}) => {
    // grabs video props and create same variable const video = props.video;

    return (
        <li className={"list-group-item"}>
            <div className={"video-list-media"}>
                <div className={"media-left"}>
                    <img className={"media-object"}/>
                </div>

                <div className={"media-body"}>
                    <div className={"media-heading"}>

                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;