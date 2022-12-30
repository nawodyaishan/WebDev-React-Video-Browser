import React, {Component} from 'react';

// Class based component
class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)}/>;
    }

    onInputChange(event) {

    }
}

// Function based component
// const SearchBar = () => {
//     return <input/>
// }

export default SearchBar;








