import React, {useState} from 'react';
import firebase from '../../../Config/Firebase/index';
import {useHistory} from 'react-router-dom';
import NavBar from '../../Molecules/Navigation/navBar';



const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setfullName] = useState('');

    let history = useHistory();

    const onSubmit = () => {
        const data = {
            email: email,
            fullname: fullName,
            password: password,
        };

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            const userName = fullName;
            firebase.database().ref('Users/' + userName).set({ data })
            
            

            setfullName('');
            setEmail('');
            setPassword('');
            history.push('/');
        })
        .catch((error) => {
            console.log(error);
        })
    }

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
