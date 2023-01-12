import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAwmN7Zhq3mNwYXqiaAMMg_fCPCej74sIw';

// Creating component to generate html
class App extends Component {
    constructor(props, context) {
        this.state = {videos: []}

        YTSearch({key: API_KEY, term: "Surf Boards"}, (videoData) => {
            this.setState({videos: videoData})
        })
    }

    render() {
        return (<div>
            <SearchBar/>
        </div>);
    }
}

// Taking HTML JSX to the DOM
ReactDOM.render(<App/>, document.querySelector(`.container`));