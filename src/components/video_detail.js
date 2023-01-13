import React, {Components} from 'react';
import VideoListItem from './video_list_item';

const VideoDetail = (video) => {

    // checking video before loading
    if (!video) {
        return <div>Loading ....</div>
    }

    const videoId = video.id.videoId;

    const url = "https://www.youtube.com/embed/" + videoId;

    return (<div className="video-detail col-md-8">
        <div className={"embed-responsive embed-responsive-16by9"}>
            <iframe className={"embed-responsive-item"} src={url}></iframe>
        </div>
        <div className={"details"}>
            {video.snippets.title}
            {video.snippets.description}
        </div>
    </div>)
}

export default VideoDetail;

