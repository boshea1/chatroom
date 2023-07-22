import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [user, loading] = useAuthState(auth)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const googleSignIn = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            console.log(result.user)
            navigate('/chatroom')
        } catch(error){
            console.log(error)
        }
      };
      

      useEffect(() => {
        if (user) {
          console.log('it worked')
        } else {
          console.log("login");
        }})

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-6xl font-medium mb-3 text-center">Chat App</h2>
    <h2 className="text-3xl font-medium">Join today</h2>
    <div className="py-4">
      <h3 className="py-4">Sign in</h3>
      
      <div className="flex flex-col gap-4">
        <button
          onClick={googleSignIn}
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
  )
}

export default SignIn