import React, {Components} from 'react';
import VideoListItem from './video_list_item';

const VideoList = () => {
}

const VideoList = (props) => {
    const videos = props.videos;
    return (<ul className={"col-md-4, list-group"}>
            {videos.length}
        </ul>);
}

export default VideoList;

