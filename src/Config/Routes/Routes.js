import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../Components/Pages/Login/Login';
import Profile from '../../Components/Pages/Profile/Profile';
import Post from '../../Components/Pages/Post/Post';
import Signup from '../../Components/Pages/SignUp/Signup';



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/post">
                    <Post />
                </Route>
                <Route path="/Signup">
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
