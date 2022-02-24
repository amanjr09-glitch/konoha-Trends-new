import React from 'react';
import '../sass/components/Profile.css';
import { authentication } from '../firebase/firebase';
import { useHistory } from "react-router-dom";
function Profile(){
    const history = useHistory();
    const doLogout = () => {
        authentication.signOut();
        history.push('/');
    }
    return(
    <div class="maincontainer">
    <div class="container1">
    
    <div class="member">
        <p id="name"><b>Madhu Sudan Singh</b></p>
        <p id="mail">singhmadhusudan1998@gmail.com</p>
         <a href="">Get Exclusive Membership</a>
    </div>
    <div class="sidenav">
    
    <ul>
        <li>Orders</li>
    </ul>
    
    <ul>
        <li>Gift Vouchers</li>
        <li>Tss Points</li>
        <li>Tss Monry</li>
        <li>Saved Cards</li>
        <li>FAQs</li>
        <li>Profile</li>
    </ul>
    
    <ul>
        <li>Submit Designs</li>
    </ul>
    
    <button onClick={doLogout}>logout</button>
    </div>
    </div>
    
    <div class="container2">
        <h6>Edit Profile</h6>
    
        <div class="email">
            <form action=""/>
                <label for="fname">Email</label>
              <input type="email" id="Email" name="Email" /><br/>
              
        </div>

    <div class="detail">
        <h6>General Information</h6>
        <hr/>
        <div class="forme">

            <div class="form1">
                <form action=""/>
                    <label for="fname">First Name*</label><br/>
                  <input type="text" id="Firstname" name="Firstname" value="" required/><br/>
                <form action=""/>
                    <label for="lname">Last Name</label><br/>
                  <input type="text" id="Lastname" name="Lastname" value="" /><br/>
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
                  <input type="date" id="dob" name="dob" value=""/ ><br/>
                <form action=""/>
                    <label for="lname">Mobile No</label><br/>
                  <input type="text" id="mobileno" name="mobileno" value="" required/><br/>
                <form action=""/>
                    <label for="lname">Address</label><br/>
                  <input type="textarea" id="address" name="address" value="" required/><br/>
         <hr/>
              <div class="button">
                 <button>save</button>
              </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    );
}

export default Profile;