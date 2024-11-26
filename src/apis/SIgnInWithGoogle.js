 //sign in with google
 function signInWithGoogle()
 {
     fetch('https://payppy.in/auth/google-login',{
        credentials:'include'
     })
     .then((data)=>{

     })
     .catch((error)=>{

     })
     
 }

 export default signInWithGoogle;