import React from 'react';


const VideoListItem = ({video}) => { // take a property from video list grab variable and declare video
	console.log(video);
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object"/>
				</div>

			<div className="media-body">

				<div className="media-heading">

				</div>

				</div>
			</div>
		</li>
	);
};


export default VideoListItem;