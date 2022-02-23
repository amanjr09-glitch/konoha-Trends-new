import React,{useState} from 'react';
import '../sass/compoonents/login.css'
import SignUp from './SignUp';
import { FcGoogle} from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { Link,Redirect } from 'react-router-dom';
import { authentication } from '../firebase/firebase';
import { signInWithEmailAndPassword , signInWithPopup , GoogleAuthProvider } from "firebase/auth";
import {  } from 'firebase/auth';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const loginUser = (event)=> {
        event.preventDefault();
       

        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            history.push('/');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const signInWithGoogle = () => {
        const provder = new GoogleAuthProvider();
        signInWithPopup(authentication,provder).then( (res) => {
          sessionStorage.setItem('user', JSON.stringify(res));
          history.push('/');
        }).catch(err => {
          console.log(err);
        });
      }
    return (
        <div class="container">
        <form >
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div class="sign-up-container">
                <button disabled={!validateForm()} onClick={loginUser}>Log In</button>
                <div className="or">or</div>
                <button onClick={signInWithGoogle}>
                    <a href="#" class="social" > Login With  <FcGoogle class="fab fa fa-Google fa-2x"/></a>
                </button>
            </div>

            <div className='forgot'>
                <a href="#">Forgot your password?</a>
                <div class="signup">
                    <a >
                        <Link to="/sign-up">Sign up</Link>
                    </a>
                </div>
            </div>
        </form>
        </div>

    )
}
//<a href="#" class="social" onClick={signInWithGoogle}><BsGoogle class="fab fa fa-twitter fa-2x"/></a>
export default Login


{/* <button ><a href="#">Log In</a></button> */}
