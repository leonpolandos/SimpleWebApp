import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import firebase from '../../../Config/Firebase/index'



const AfterLoginNavbar = () => {

    const historyN = useHistory()
    const logoutClick = () => {
        firebase.auth().signOut()
        .then(() => {
            alert("LogOut berhasil")
            historyN.push('/') 
        })
        
    } 
    let name;
    let user = firebase.auth().currentUser;
    if (user != null) {
        name = user.displayName;
    } 
    console.log(name)
    return (
        <div className="container-liquid">
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand" to="/">LGO</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav ">
                        <Link className="nav-link" to="/">Login</Link>     
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/post">Your Post</Link>
                        <Link className="nav-link" to="/Signup">Sign Up</Link>
                    </div>
                </div>
                </nav> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <div className="navbar-nav">
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/post">Your Image</Link>
                    </div> 
                    <div className="navbar-nav">
                        <h4 className="text-light">Welcome {name}</h4>
                    </div>      
                    <div className="navbar-nav">
                        <button className="btn btn-danger mt-2" type="button" value={window.onload} onClick={logoutClick}>Logout</button>
                    </div>    
                </div>
            </nav>
        </div>

    )
}

export default AfterLoginNavbar;
