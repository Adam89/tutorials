//functional component props object is an argument
//class based component props are available anywhere in any method using this.props

import React from 'react';
import VideoListItem from './videoListItem';


// loop over array and generate one instance of video list item

// onVideoSelect={props.onVideoSelect} = prop being passed from app which we are going to pass to video list item

const VideoList = (props) => { // gets data from index js state as thats the parent which pass props to video list child array of videos


	const videoItems = props.videos.map((video) => { // loop over videos array and pumps into video list item LI because of import also added unique keys to target items
		return <VideoListItem
		onVideoSelect={props.onVideoSelect}
		key={video.etag}
		video={video}/>
	});

    return (

    	< ul className="col-md-4 list-group">
    	{videoItems}
        < /ul>
    );
};


export default VideoList;