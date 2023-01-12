import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAwmN7Zhq3mNwYXqiaAMMg_fCPCej74sIw';

YTSearch({key: API_KEY, term: "Surf Boards"}, (data) => {
    console.log(data)
})

// Creating component to generate html
class App extends Component {
    render() {
        return
        (<div>
            <SearchBar/>
        </div>);
    }
}

// Taking HTML JSX to the DOM
ReactDOM.render(<App/>, document.querySelector(`.container`));