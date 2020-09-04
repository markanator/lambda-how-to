import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
// Import Pages
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import FPContent from "./containers/Frontpage";
import Profile from "./containers/Profile";
import SettingsPage from "./containers/Settings";
import EditPost from "./containers/EditPost";
import CreateGuide from "./containers/CreatePost";
import Search from "./containers/Search";
// import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ViewGuide from "./containers/ViewGuide";
import PrivateRoute from "./components/PrivateRoute";
// import 3rd Party assets
import axios from "axios";
// import styling
import "./App.css";

function App() {
    let history = useHistory();
    const [isLoading, setIsloading] = useState(false);

    // Setting up basic logged in check system
    const [loggedIn, setLoggedIn] = useState(false);
    const logChecker = (e) => {
        setLoggedIn(e);
    };
    const [user, setUser] = useState({});

    // WILL GET FILLED WITH AXIOS DB CALL
    const [publishedList, setPublishedList] = useState([]);

    // Fetch POSTS from DB
    useEffect(() => {
        // setIsloading(true);
        axios
            .get("https://how-tos-bw.herokuapp.com/posts")
            .then((resp) => {
                console.log("Posts received!");
                setPublishedList(resp.data);
                // setIsloading(false);
            })
            .catch((error) => {
                console.log(error);
                // setIsloading(false);
            });
    }, []);

    // used for successful login
    const manualUserSet = (reply) => {
        setUser(reply);
    };

    // For searching posts
    // would be nice to have context/redux
    const [searchTerm, setSearchTerm] = useState("");

    const SetSearchFunc = (searchTxt) => {
        setSearchTerm(searchTxt);
    };
    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log("user wants to search");
        history.push(`/search/${searchTerm}`);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="App">
            {/* Universal header */}
            <Header
                logChecker={logChecker}
                logged={loggedIn}
                userData={user}
                setSearch={SetSearchFunc}
                searchText={searchTerm}
                onSubmit={onSearchSubmit}
            />

            {/* Front Page */}
            <Route exact path="/">
                <FPContent fpData={publishedList} />
            </Route>

            {/* Login Page */}
            <Route path="/login">
                <Login setUser={manualUserSet} logChecker={logChecker} />
            </Route>

            {/* Sign Up Page */}
            <Route path="/sign-up">
                <SignUp />
            </Route>

            {/* logged in user profile page */}
            <Route exact path="/users/:user_id">
                <Profile userData={user} pubData={publishedList} />
            </Route>

            {/* logged in user settings page */}
            <Route exact path="/profile/:user_id/settings">
                <SettingsPage userData={user} />
            </Route>

            {/* logged in user edit page */}
            <Route exact path="/posts/:id/edit">
                <EditPost userData={user} pubList={publishedList} />
            </Route>

            {/* Public View Page */}
            <Route exact path="/posts/:id">
                <ViewGuide pubList={publishedList} />
            </Route>

            {/* logged in user create page */}
            <Route exact path="/posts/:id/create">
                <CreateGuide userData={user} />
            </Route>

            {/* Search */}
            <Route path="/search/:searchTerm">
                <Search allPosts={publishedList} />
            </Route>

            {/* universal footer */}
            <Footer />

            <PrivateRoute exact path="/protected" component={Profile} />
        </div>
    );
}

export default App;
