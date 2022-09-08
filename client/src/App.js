// set up project structure
import React from "react";

/* React router --> not necessary 
- could use Redux or ...
- simplicity --> pass "props" as query parameter  */
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

// create App.js component
// simple arrow based component
// just return --> no {}
const App = () => (
    <Router>
        {/* root path, pass in component render */}
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
        {/* 
        1. user come --> Join component
        2. pass data in log in --> pass query string data to Chat
        3. render chat component  */}
    </Router>
);

export default App;
