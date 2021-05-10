import React, {useState} from 'react';
import firebase from '../../../Config/Firebase/index';
import {useHistory} from 'react-router-dom';
import NavBar from '../../Molecules/Navigation/navBar';


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setfullName] = useState('');
    const [fotoProfil, setfotoProfil] = useState({});
 

   
    let history = useHistory();
    console.log("foto : " + fotoProfil.name);

    const onSubmit = () => {
        const data = {
            email: email,
            fullname: fullName,
            password: password,
        };  
        

        if(data.email === "" || data.fullname === "" || data.password === ""){
            alert("All input must be filled");
        }else if (data.fullname === ""){
            alert("Name Cannot be empty");
        }else if (data.fullname.length <= 4){
            alert("Name must exceed 4 letters");
        }else if(data.password === ""){
            alert("Passowrd Must be filled");
        }else if(data.email === ""){
            alert("Email must be Filled")
        }else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const userId = userCredential.user.uid;
                firebase.database().ref('Users/' + userId).set({ data })
                //Passing fotoProfil ke storage
                firebase.storage().ref(`Users/${userCredential.user.uid}/Profile.jpg`).put(fotoProfil)
                .then(() => console.log("Update Sukses"))
                .catch(() => {
                    console.log("Eror");
                })
                const user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName : fullName,                   
                })
                
                setfullName('');
                setEmail('');
                setPassword('');
                alert("Sign Up Success");
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }



    return (
        <>
        <NavBar />
        <div className="container mt-5 ">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5"> {/* Dalam classname ini akan membuat besar kecil nya form */}
                    <form>
                        
                        <form className="text-center border border-light rounded border-4 p-6">
                            <h4>Sign Up</h4>
                            <div className="row justify-content-center mt-3"> {/* Membuat konten berada di tengah */}
                            </div>
                            <p className="text-start mt-3">
                                <small className="fw-bold">Foto Profil :</small>
                            </p>
                            <div class="input-group">
                                <input 
                                type="file" 
                                className="form-control" 
                                id="inputGroupFile04" 
                                aria-describedby="inputGroupFileAddon04" 
                                aria-label="Upload" 
                                accept='image/*'
                                onChange={(e) => setfotoProfil(e.target.files[0])}
                                
                                />
                                
                            </div>
                            <p className="text-start mt-3">
                                <small className="fw-bold">Input Your Name :</small>
                            </p>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={fullName} 
                                placeholder="FullName" 
                                onChange={(e) => setfullName(e.target.value)}
                            />
                            <p className="text-start mt-3">
                                <small className="fw-bold">Input Your Email :</small>
                            </p>
                            <input 
                                type="email" 
                                className="form-control" 
                                value={email} 
                                placeholder="Email" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="text-start mt-3">
                                <small className="fw-bold">Input Your Password :</small>
                            </p>
                            <input 
                                type="password" 
                                className="form-control mt-2" 
                                value={password} 
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <p className="text-start mt-3">
                                <small className="fw-bold">Choose Your Gender :</small>
                            </p>
                            <select className="form-select mt-2" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                               
                            </select>
                            <button type="button" onClick={onSubmit} className="btn btn-primary border-light mt-2">Sign Up</button>

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
