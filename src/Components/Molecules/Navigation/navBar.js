import React from 'react';
import {Link} from 'react-router-dom';

const navBar = () => {

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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">

                <div >
                    {/* KOSONG */}
                </div>

                    <div className="navbar-nav">
                        <div className="p-2">
                            <form className="d-flex bg-success bg-gradient rounded-pill">
                                <Link className="nav-link" value={window.onload} to="/">Log in</Link>
                            </form> 
                        </div>
                        <div className="p-2">
                            <form className="d-flex bg-danger bg-gradient rounded-pill">
                                <Link className="nav-link" value={window.onload} to="/SignUp">Sign Up</Link>
                            </form>
                        </div>   
                    </div>
          

                </div>
            </nav>
        </div>

    )
}

export default navBar;
