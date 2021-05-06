import React from 'react'
import NavBar from '../../Molecules/Navigation/navBar';

const Signup = () => {
    return (
        <>
        <NavBar />
        <div className="container mt-5 ">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5"> {/* Dalam classname ini akan membuat besar kecil nya form */}
                    <form>
                        <form className="text-center border border-light rounded border-4 p-5">
                            <h4>Sign Up</h4>
                            <p className="text-start mt-3">
                                <small className="fw-bold">Input Your Email :</small>
                            </p>
                            <input type="email" className="form-control" placeholder="Email" />
                            <p className="text-start mt-3">
                                <small className="fw-bold">Input Your Password :</small>
                            </p>
                            <input type="password" className="form-control mt-2" placeholder="Password"/>
                            <p className="text-start mt-3">
                                <small className="fw-bold">Choose Your Gender :</small>
                            </p>
                            <select className="form-select mt-2" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                               
                            </select>
                            <button className="btn btn-primary border-light mt-2">Sign Up</button>

                        </form>
                    </form>
                </div>
            </div>  
        </div>
        {/* akan muncul dibawah form login */}
        </>
    )
}

export default Signup;
