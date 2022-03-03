import {React} from 'react';
import '../sass/components/Profile.scss';
import { authentication } from '../firebase/firebase';
import { useHistory } from "react-router-dom";
import { useState } from 'react';


function Profile(){
    const history = useHistory();
    const doLogout = () => {
        authentication.signOut();
        history.push('/');
    }

    let userObj;

    const [user,setUser] = useState(null);
    authentication.onAuthStateChanged((user) => {
        if(user){
            console.log(user);
            return setUser(user);
        }
        {/*setUserSignedIn(false);*/}
    });


    return(
    <div class="maincontainer">
    <div class="container1">
    
    <div class="member">
        <p id="name"><b>{user ? user.displayName : "N/A"}</b></p>
        <p id="mail">{user ? user.email : "N/A"}</p>
    </div>
    <div class="sidenav">
    
    <ul>
        <li>Orders</li>
    </ul>
    
    <ul>
        <li>Gift Vouchers</li>
        <li>FAQs</li>
        <li>Profile</li>
    </ul>
    
   
    
    <button onClick={doLogout}>LOGOUT</button>
    </div>
    </div>
    
    <div class="container2">
        <h4> <b>Edit Profile</b> </h4>
    
        <div class="email">
            <form action=""/>
                <label for="fname">Email</label>
                <input type="email" id="Email" name="Email" value ={user ? user.email : ""} /><br/>
              
        </div>

        <h5>General Information</h5>

    <div class="detail">
        <div class="forme">

            <div class="form1">
                <form action=""/>
                    <label for="fname">First Name*</label><br/>
                  <input type="text" id="Firstname" name="Firstname" required/><br/>
                <form action=""/>
                    <label for="lname">Last Name</label><br/>
                  <input type="text" id="Lastname" name="Lastname"  /><br/>
                <div class="radio">
                    <label for="lname">Gender</label><br/>
                    <form action=""/>
                       <input type="radio"/>
                       <label for="male">Male</label>
                       <input type="radio"/>
                       <label for="male">Female</label>
                       <input type="radio"/>
                       <label for="male">Other</label>
                </div>
            </div>
            
            <div class="form2">
                <form action=""/>
                    <label for="fname">Date Of Birth</label> <br/>
                  <input type="date" id="dob" name="dob" / ><br/>
                <form action=""/>
                    <label for="lname">Mobile No</label><br/>
                  <input type="text" id="mobileno" name="mobileno" required/><br/>
                <form action=""/>
                    <label for="lname">Address</label><br/>
                  <input type="textarea" id="address" name="address" required/><br/>
         <hr/>
              <div class="button">
                 <button>SAVE</button>
              </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    );
}

export default Profile;