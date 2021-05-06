import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../Molecules/Navigation/navBar';

const Login = () => {
    return (
        <>
        <NavBar />
        <div className="container mt-5 ">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5"> {/* Dalam classname ini akan membuat besar kecil nya form */}
                    <form>
                        <form className="text-center border border-light rounded border-4 p-5">
                            <h4>LOGIN</h4>
                            <input type="email" className="form-control mt-3" placeholder="Email" />
                            <input type="password" className="form-control mt-3" placeholder="Password"/>
                            <p className="text-end">
                                <Link>Forgot Password?</Link>
                            </p>
                            <button className="btn btn-primary border-light ">Sign In</button>
                        </form>
                    </form>
                </div>
            </div>  
        </div>
        {/* akan muncul dibawah form login */}
        </>
    )
}

export default Login;
