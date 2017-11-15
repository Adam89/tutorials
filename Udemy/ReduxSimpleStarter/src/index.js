/* React is a JS library that is used to produce HTML and serve them to the browser we are writing individual components or views. Components are snippets of code that produce HTML. We write multiple different components and we nest different components inside each other to create complex application in a real simple way. A components is a collection of JS functions that produce HTML.

JSX is the HTML that returns on a function. Its a subset dialect of JS and cannot be interpreted by the browser. We use JSX as this produces the HTML as we render the components. Its trans piled through babel and pushed out to the DOM. JSX can be nested like list items. JSX makes our components much cleaner.

JS Modules encapsulates the IDEA that JS code should be separated from other code snippets that do not need it. Make an instance of an component we have to wrap it in JSX tags </ App >

All components are child's of the root container div within the DOM.

Always one component per file. Make sure you break up your app into individual items.

A class component is used when we want a component to have internal record keeping ability to be aware of itself and whats happened to it when its rendered;

ES6 Class is a JS object with property's and methods like a constructor function.

Functional component the props object is an argument

Class props are available in any method we define by using this.props keep in my mind when refactoring functinal components to class based

Add the concept of selected video to app compoennt state selected video will be video object always passed into video detail
/*
Components

Do i need it to maintain any kind of state. This should help you define a functional component or class based.

Some parent objects can't fetch data quick enough to satisfy the render of the child components

Video Select functionality : pass a callback down two levels to the search baron VideoSelect is callback which runs through to a certain child component

Search bar functionality : pass a callback down to the search bar which takes a string and makes a new ytserach which updates state of app

Component level state localised state but redux is different as you control the apps state 

*/

/*

1.Create a new component. This component should produce some HTML.
2. Take this components generated HTML and push into DO. We need to push an instance of app not a class. Class is a type and produces instances.



1. search bar
2. video player and title/description
3. multiple next videos details
4. nested components to render a list of components
5. one wrapping index.js which has all other components as child



*/
import _ from 'lodash';
import React, { Component } from 'react'; // go find library and assign it to React variable this library knows how to work with render react components and nest them grab components
import ReactDOM from 'react-dom'; // react dom is library for rendering JSX to the DOM
import YTSearch from 'youtube-api-search'; //package for youtube api search
import SearchBar from './components/searchbar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail'; //need to pass a video to this component add
const youtube_Api_Key = 'AIzaSyBsj2cI1pDVoTdWrojxyp6AHhQ5Sm6wxtQ';


// const App = () => { // type of functional component this is a class not an instance

//  return (
//      <div>
//          <SearchBar/>
//      </div>
//  );
// }

//class based components

class App extends Component { // app needs to keep track of list of videos so it will be recording the videos on its state. data will change over time hence why it needs to be on the state
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }; //array contains a list of video when app boots up and YT SEARCH RUNS

        this.videoSearch('skateboarding'); // first render call videoSearch function
    }

    videoSearch(term) { // method passes to searchbar component 
        YTSearch({
            key: youtube_Api_Key,
            term: term
        }, (videos) => {// we also pass data or pass props to video list below app parent pass data to child video list
            this.setState({

                videos: videos,
                selectedVideo: videos[0]

            }); // es6 allows use just videos when key and property parameter we are passing are the same
            // console.log(videos);
        }); // fetched youtube array of skateboarding
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // take inner function and call it every 300 miliseconds
        return (
            < div >
                <SearchBar 
                    onSearchTermChange={videoSearch} />
                <VideoDetail 
                    video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}


ReactDOM.render(< App />, document.querySelector('.container')); // insert instance of app to dom
