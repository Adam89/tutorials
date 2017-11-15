
// passing in {video} is the same as writing const video = props.video
import React from 'react';

// ES6 allows us to pass props in and creates a short hand method
// ({video, onVideoSelect}) const video = props.video or props.onVideoSelect


const VideoListItem = ({video, onVideoSelect}) => { // take a property from video list grab variable and declare video


	const imageUrl = video.snippet.thumbnails.default.url;


	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>

			<div className="media-body">

				<div className="media-heading">
					{video.snippet.title}
				</div>

				</div>
			</div>
		</li>
	);
};


export default VideoListItem;