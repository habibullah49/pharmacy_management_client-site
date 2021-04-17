import firebase from "firebase/app";
import "firebase/auth";
import {useContext, useState} from 'react';
import './Login.css'
import firebaseConfig from "./firebase.confiq";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";



if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}



function Login() {
  const[newUser,setNewUser]=useState(false);
  const[user,setUser]=useState({
    isSignedIn:false,
    newUser:false,
    name:'',
    email:'',
    photo:'',
    password:'',

  })
  const  [loggedInUser,setLoggedInUser]=useContext(userContext);
  const history=useHistory();
  const location=useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
      const{displayName,photoURL,email}=res.user;
      const signedInUser={
        isSignedIn:true,
        name:displayName,
        email:email,
        photo:photoURL
      }
      setUserToken();
      return signedInUser;
      
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message);
    })
  }

  const setUserToken=()=>{
    firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
      sessionStorage.setItem('token',idToken);
     
    }).catch(function(error) {
      
    });
  }
  const handleSignOut=()=>{
    firebase.auth().signOut()
    .then(res=>{
      const signedOutUser={
        isSignedIn:false,
        name:'',
        photo:'',
        email:'',
        error:'',
        success:false
      }

      
      setUser(signedOutUser);
    })
    .catch(err=>{

    })
    
  }
  
  const handleBlur=(event)=>{
   let isFormValid=true;
    if(event.target.name==='email'){
      isFormValid=/\S+@\S+\.\S+/.test(event.target.value);
     

    }
    if(event.target.name==='password'){
      const isPasswordValid=event.target.value.length>6;
      const passwordHasNumber=/\d{1}/.test(event.target.value);
      isFormValid=isPasswordValid && passwordHasNumber;

    }
    if(isFormValid){
      const newUserInfo={...user};
      newUserInfo[event.target.name]=event.target.value;
      setUser(newUserInfo);

    }

  }
  const handleSubmit=(event)=>{
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
        userUpdateName(user.name);
      

      })
      .catch((error) => {
        const newUserInfo={...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });


    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=> {
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('sign in user info',res.user);
       
      })
      .catch((error) => {
        const newUserInfo={...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
    }
    event.preventDefault();

  }
  const userUpdateName=name=>{
    const  user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: name
        
      }).then(function() {
        console.log("User name undated successfully");
      }).catch(function(error) {
        console.log("error");
      });

  }
  
  return (
    <div style={{textAlign:'center'}}>

      {
        user.isSignedIn && <div className="div"> 
          <p>welcome,{user.name}</p>
          <p>your email{user.email}</p>
          <img src={user.photo} alt=""/>
                
        </div>
      }
      <h1 className="form">Login</h1>
      <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User sign up</label>
      <form className="form design" onSubmit={handleSubmit}>
      {newUser && <input className="form_part" name="name" type="text" onBlur={handleBlur} placeholder="Your Name"/>}
        <br/>
        <input className="form_part" type="text" onBlur={handleBlur} name="email" placeholder="Enter your email address" required/>
        <br/>
        <input className="form_part" type="password" name="password" onBlur={handleBlur} placeholder="Enter your password"required/>
        <br/>
        <input className="button" type="submit" value={newUser ? 'sign up' : 'sign in'}/>
      </form>


      {
        user.isSignedIn ?  <button onClick={handleSignOut} className="button">Sign out</button> :
        <button onClick={handleSignIn} className="button">Sign in with google</button>  
      }
      <p style={{color:'red'}}>{user.error}</p>
     {
       user.success &&  <p style={{color:'green'}}>user {newUser ? 'created' :'logged In' } successfully</p>
     }
      
    </div>
  );
}

export default Login;
