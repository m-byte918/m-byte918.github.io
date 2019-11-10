// Import React
import React from "react";

// Use a boilerplate CSS file to reset margins and other stuff
// Also use it to add custom styling
import "./App.css";
import shellbarStyle from "./custom-fundamental-styles/shellbar.css";
import tabStyle from "./custom-fundamental-styles/tabs.css";

// Import the m-byte918 logo to use as an asset
import logo from "./logo.png";

// Import some prebuilt React components from the "Fundamental React" module
// Information on the use of these components can be found here:
// https://sap.github.io/fundamental-react/home
import {
  Alert,
  Shellbar,
  TabGroup,
  Tab,
  LayoutGrid,
  Panel,
  Button
} from 'fundamental-react';

// Define the max number of columns that can be used in LayoutGrid components
let maxCols = 6;

// Create an App component to define the page layout
function App() {
  return (
    <div>
      <Alert link="https://github.com/m-byte918" linkText="view my projects" type="success" dismissible>
        Check out my Github!
      </Alert>
      <Shellbar
        customStyles={shellbarStyle}
        logo={<img alt="m-byte918 logo" src={logo}/>}
        productTitle="Christian Rodriguez"
      />
      <TabGroup customStyles={tabStyle}>
        <Tab id="1" title="Portfolio" customStyles={tabStyle}>
          <h1>Portfolio</h1>
        </Tab>
        <Tab id="2" title="Projects" customStyles={tabStyle}>
          <h1>Projects</h1>
        </Tab>
        <Tab id="3" title="Schoolwork" customStyles={tabStyle}>
          <h1>Schoolwork</h1>
        </Tab>
        <Tab id="4" title="[ DEV TAB ]" customStyles={tabStyle}>
          <h1>Various Buttons</h1>
          <br/>
          <Button type="negative">
            Button
          </Button>
          <br/>
          <br/>
          <Button type="negative" selected>
            Button ( Selected )
          </Button>
          <br/>
          <br/>
          <Button type="negative" disabled>
            Button ( Disabled )
          </Button>
          <br/>
          <br/>
        </Tab>
      </TabGroup>
    </div>
  );
}

// Export the App component so that index.js can use it
export default App;