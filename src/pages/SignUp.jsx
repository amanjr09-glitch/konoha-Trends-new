import React, { useState } from 'react'
import '../sass/components/SignUp.scss';
import {FcGoogle} from "react-icons/fc";
import { Link , Route} from 'react-router-dom';
import { authentication } from '../firebase/firebase';
import { createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Button  from '../components/Button';
function SignUp() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass,setConfirmPass] = useState("");

  const [alert, setAlert] = useState({
    type: 'error',
    message : 'Password does not match',
    show : false
  });

  function onShowAlert(type) {
    setAlert({
      type: type,
      text: '',
      show: true
    })
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const checkConfirmPassowrd = () => {
    return password === confirmPass;
  };



  const register = (event) => {
    event.preventDefault();
    if(!checkConfirmPassowrd()){

      return false;
    }
    console.log(email,password);
    createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      history.push('/');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };

  /* const googleLogin = (event) => {
    event.preventDefault();
    signInWithGoogle;
  }; */

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
        <div className="sign-up-container">
          <form onSubmit={register} >

            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            <input type="email" placeholder="Email" value={email} onChange={(e) =>  setEmail(e.target.value) } required/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required  />
  
            <div className="register-btn" >
              <Button backgroundColor="pink" type="submit">Sign Up</Button>
            </div>
            <br></br>

            <div className="or">or</div>

            <Button backgroundColor="pink" onClick={signInWithGoogle}>
                <a className="social" > Sign Up With <FcGoogle className="fab fa fa-Google fa-2x"/></a>
            </Button>
            <br></br>
            <a ><Link to="/log-in">Already a customer?</Link></a>
          </form>
        </div>

    )
}

export default SignUp