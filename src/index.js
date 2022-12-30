import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAwmN7Zhq3mNwYXqiaAMMg_fCPCej74sIw';

// Creating component to generate html
const App = () => {
    return <div>
        <SearchBar/>
    </div>
}

// Taking HTML JSX to the DOM
ReactDOM.render(<App/>, document.querySelector(`.container`));