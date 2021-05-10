import React, {useState} from 'react';
import AfterLoginNavbar from '../../Molecules/Navigation/afterLoginNavbar';
import {Link, useHistory} from 'react-router-dom';
import firebase from '../../../Config/Firebase/index';

const Profile = () => {
    const [foto, setFoto] = useState('');
    
    const historyProfile = useHistory();
    
    let img, fullName;

    console.log(foto.name)    
    let pengguna = firebase.auth().currentUser;


    const onPost = () => {
        if(foto === null){
            alert("Masukan Foto terlebih dahulu")
        } else {
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                firebase.storage().ref(`Users/${user.uid}/${foto.name}`).put(foto)
                .then(() => console.log("Update Sukses"))
                .catch(() => {
                    console.log("Eror");
                })
            }else {
                console.log("Not Log In");
                historyProfile.push('/')
            }
        })
        }        


    }
    
    if(pengguna != null){
        fullName = pengguna.displayName
    }
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            let imgRef = firebase.storage().ref(`Users/${user.uid}/Profile.jpg`);
            imgRef.getDownloadURL().then((url) => {
                let img = document.getElementById('img');
                img.src = url;
                console.log('Sukses')
            }).catch((error) => {
                console.log("Error");
            })
            // firebase.storage().ref(`Users/${user.uid}/Profile.jpg`).getDownloadURL()
            // .then((fotoProfil) => {
            //     img = fotoProfil;
            //     img = document.getElementById('img').src = fotoProfil
            //     console.log(user)
            // }) 
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
                             
                                <img src='https://via.placeholder.com/150' id='img' width='150' height='150' alt=""></img>
                                {/* Membuat border foto */}
                                <div className="row justify-content-center mt-3"> {/* Membuat konten berada di tengah */}
                                    <input 
                                    type="file" 
                                    className="form-control" 
                                    id="inputGroupFile04" 
                                    aria-describedby="inputGroupFileAddon04" 
                                    aria-label="Upload" 
                                    accept='image/*'
                                    onChange={(fileInput) => setFoto(fileInput.target.files[0])}    
                                    
                                    />
                                    <div className="navbar-nav">
                                            <Link className="btn btn-primary mt-2" onClick={onPost} to="/post">Upload Photo</Link>
                                    </div> 
                                </div>
                                {/* Batas border foto */}
                            </form>
                        </form>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Profile;
