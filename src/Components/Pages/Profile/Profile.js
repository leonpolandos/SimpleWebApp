import React, {useState} from 'react';
import NavBar from '../../Molecules/Navigation/navBar';
import {Link} from 'react-router-dom';

const Profile = () => {
    
    return (
        
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">{/* Dalam classname ini akan membuat besar kecil nya form */}
                        <form>
                            <form className="text-center border border-light rounded border-4 p-5">
                                <h4>Profile</h4>
                                {/* Membuat border foto */}
                                <div className="row justify-content-center mt-3"> {/* Membuat konten berada di tengah */}
                                    <div className="col-md-4">
                                        <form className="border border-dark rounded rounded-circle p-5" >
                                            <img src="../../../img/create-awesome-logo-design.jpg"></img>
                                        </form>
                                    </div>
                                </div>
                                <Link> Change Photo Profile </Link>
                                {/* Batas border foto */}
                                <p className="text-start mt-3">
                                    <small>Change Name :</small>
                                </p>
                                <input type="text" className="form-control mt-3" placeholder="Change Full Name here" />
                                <p className="text-start mt-3">
                                    <small>Change Password :</small>
                                </p>
                                <input type="password" className="form-control mt-3" placeholder="Change Password" />
                                <button className="btn btn-primary mt-2">Save</button>

                                <br />
                            </form>
                        </form>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Profile;
