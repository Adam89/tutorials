//functional component

import React from 'react';
import VideoListItem from './videoListItem';

// loop over array and generate one instance of video list item


const VideoList = (props) => { // takes a state property from index JS

	console.log(props);

	const videoItems = props.videos.map((video) => { // loop over videos array and pumps into video list item LI because of import also added unique keys to target items
		return <VideoListItem key={video.etag} video={video}/>
	});

    return (

    	< ul className="col-md-4 list-group">
    	{videoItems}
        < /ul>
    );
};


export default VideoList;