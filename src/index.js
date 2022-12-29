import React from 'react';
import ReactDOM from 'react-dom'

// Creating component to generate html
const App = () => {
    return <div>Hi!!</div>
}

// Taking HTML JSX to the DOM
ReactDOM.render(<App/>, document.querySelector(`.container`));