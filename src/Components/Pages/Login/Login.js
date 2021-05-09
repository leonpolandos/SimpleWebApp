import React, {useState} from 'react';
import firebase from '../../../Config/Firebase/index';
import {Link} from 'react-router-dom';
import NavBar from '../../Molecules/Navigation/navBar';
import {useHistory} from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const historyLogin = useHistory();

    
    const submitLogin = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => historyLogin.push('/profile'))
        .catch(error => error)
    }

    return (
        <>
        <NavBar />
        <div className="container mt-5 ">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5"> {/* Dalam classname ini akan membuat besar kecil nya form */}
                    <form>
                        <form className="text-center border border-light rounded border-4 p-5">
                            <h4>LOGIN</h4>
                            <input 
                                type="email" 
                                className="form-control mt-3" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" />
                            <input 
                                type="password" 
                                className="form-control mt-3" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"/>
                            <p className="text-end">
                                <Link className="nav-link" to="/Signup">No Account?</Link>
                            </p>
                            <button type="button" className="btn btn-primary border-light" onClick={submitLogin}>Sign In</button>
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
