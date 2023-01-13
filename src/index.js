import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAwmN7Zhq3mNwYXqiaAMMg_fCPCej74sIw';

// Creating component to generate html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: "Learn React in TypeScript"}, (videos) => {
            // Replacing this.setState({videos: videos})
            this.setState({videos})
        });
    }

    render() {
        return (<div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>);
    }
}

// Taking HTML JSX to the DOM
ReactDOM.render(<App/>, document.querySelector(".container"));