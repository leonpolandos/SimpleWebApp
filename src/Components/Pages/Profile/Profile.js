import React, {useState} from 'react';
import AfterLoginNavbar from '../../Molecules/Navigation/afterLoginNavbar';
import {Link, useHistory} from 'react-router-dom';
import firebase from '../../../Config/Firebase/index';

const Profile = () => {
    const historyProfile = useHistory();

    let name, img;
    
    let user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            firebase.storage().ref(`Users/${user.uid}/Profile.jpg`).getDownloadURL()
            .then((fotoProfil) => {
                img = fotoProfil;
                img = document.getElementById('img').src = fotoProfil;
                console.log(user)
            })
        }else {
            console.log("Not Log in");
            historyProfile.push('/');
        }
    })
    
    return (
        <>
            <AfterLoginNavbar />

            <div className="container mt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">{/* Dalam classname ini akan membuat besar kecil nya form */}
                        <form>
                            <form className="text-center border border-light rounded border-4 p-5">
                                <h4>Profile</h4>
                                {/* Membuat border foto */}
                                <div className="row justify-content-center mt-3"> {/* Membuat konten berada di tengah */}
                                    <div className="col-md-4">
                                        <img src='https://via.placeholder.com/150' id='img' width='150' height='150'></img>   
                                        
                                    </div>
                                </div>
                                <Link> Change Photo Profile </Link>
                                {/* Batas border foto */}
                                <h1 id="welcomeName">Welcome </h1>                 
                                <button className="btn btn-primary mt-2">Upload Photo</button>
                                

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
