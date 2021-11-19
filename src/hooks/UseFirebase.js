import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signInWithEmailAndPassword ,signOut ,sendPasswordResetEmail  } from "firebase/auth";
import initializeAuthentation from '../Components/FirebaseConfigaretion/FirebaseInitialization';
import { useHistory } from "react-router";


initializeAuthentation()
const UseFirebase = ()=>
{
  const auth = getAuth();
  const [user,setUser]=useState({})
  const [email,setEmail]=useState('')
  const [isLoading,setIsLoading]=useState(true)
  const [passWord,setPassWord]=useState('')
  const [error,setError] = useState('');
  const history = useHistory()

  const GoogleProvider = new GoogleAuthProvider();

   
    
/** Google Sign In **/

const GoogleSignInHandler = ()=>
{
  console.log('GOOGLE SIGN IN');
   return signInWithPopup(auth, GoogleProvider)
  
}


const EmailSignInHandler = ()=>
{
  console.log('Email Sign In');
 return signInWithEmailAndPassword(auth, email, passWord)
}

/**Email & PW Handle Sign In */

// const handleEmailchange =(e)=>
// {  
// setEmail(e.target.value);
// }
// const handlePasswordchange =(e)=>
// {  
// setPassWord(e.target.value);
// }

// const SigninWithEmail=(e)=>
// {
//   e.preventDefault();
//   signInWithEmailAndPassword(auth, email, passWord)
//   .then((result) => {
//     // Signed in 
//     const {displayName,email,photoURL} = result.user;
//     const loggedinUserInfo={
//       name:displayName,
//       email:email,
//       photo:photoURL
//     }
//     setUser(loggedinUserInfo);
//     // ...
//     history.push(redirect_URL)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setError(errorCode);
//   });

// }


const SignoutHandler = ()=>
{
  signOut(auth).then(() => {
    setUser({});
    console.log('Sign-out successful');
    history.push('/logIn')
  }).catch((error) => {
    // An error happened.
  });
}

const resetPasword=()=>
{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('A reset password link has been sent to your Email Address')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode );
  });
}


useEffect( ()=>
{
    onAuthStateChanged(auth, (user) => {
        if (user) {
       
          setUser(user)
          //console.log(user);
        } else {
          // User is signed out
          // ...
        }
        setIsLoading(false)
      });
},[])


    return {user,
           email,
           passWord,
           error,
           setUser,
           setError,
           setEmail,
           setPassWord,
            GoogleSignInHandler,
            EmailSignInHandler,
            SignoutHandler,
            resetPasword,
            setIsLoading,
            isLoading}
}

export default UseFirebase ;