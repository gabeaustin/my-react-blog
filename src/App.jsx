import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import CreatePost from "./components/CreatePost";

const App = () => {
    return (
        <>
            <div className="navbar">
                <div className="links">
                    <a href="/">Main Page</a>
                    <a href="/createpost">Create Post</a>
                </div>
            </div>

            <Router>
                {/* <Route path = "/" exact render={(props) => <MainPage />} /> */}
                <Link to = "/" exact>Main Page</Link>
                <Link to = "/createpost">Create Post</Link>
            </Router>
        </>
    );
};

export default App;