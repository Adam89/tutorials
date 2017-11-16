import React from 'react';



const videoDetail = ({video}) => { // need to grab values from video object

if (!video) {
	return <div>Loading.....</div>;
}
		const videoId = video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}`; //template literals

return (
	<div className="video-detail col-md-8">
		<div className="embed-responsive embed-responsive-16by9">
			<iframe className="embed-responsive-item" src={url}></iframe>
		</div>
		<div className="details">
			<div>{video.snippet.title}</div>
			<div>{video.snippet.description}</div>
		</div>
	</div>
	);
};

export default videoDetail // has to be named the same as the function