import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MainPage from "./components/MainPage";
import CreatePost from "./components/CreatePost";

const mainPgTitle = () => <h1>Main Page</h1>
const createPgTitle = () => <h1>Create Page</h1>

const App = () => {
    return (
        <>
            <Router>
                <div className="navbar">
                    <div className="links">
                        <Link to = "/" exact>Main Page</Link>
                        <Link to = {{pathname: "/createpost"}}>Create Post</Link>
                    </div>
                </div>
                {/* <Route path = "/" exact render={(props) => <MainPage />} /> */}
            </Router>
        </>
    );
};

export default App;