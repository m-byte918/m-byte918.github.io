// Import React and ReactDOM (the two essential files for the React framework)
import React from 'react';
import ReactDOM from 'react-dom';

// Import the main "App" React component
// This component loads in all additional components
// It defines how the page is structured
import App from './App';

// Render the "App" component by attaching it as a child of
// the <div> element with the ID of "root" ( located here: showcasing-react-app/public/index.html )
ReactDOM.render(<App />, document.getElementById("root"));