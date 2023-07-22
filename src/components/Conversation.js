import React, { useRef } from 'react'
import Messages from './Messages'
import Input from './Input'
import {auth} from '../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



const Conversation = () => {
  const scroll = useRef();
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  

  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      console.log("Signed out successfully")
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    };
    
       const sendMessage = async (event) => {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    const p = <span ref={scroll}></span>

    if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
    
    if (user){
      
      return (
        
        <div className=' h-[97vh] flex flex-col justify-between'>
    
      {user && <button
       className='border-black border-2 border-solid w-20 justify-center ml-[90%] mt-2'
       onClick={signout}>Sign Out</button>}
      <Messages spanelem={p}/>
      {/* <span ref={scroll} className={'border-2 border-black border-solid w-[100%]'}></span> */}
     
      <div>
      <Input sendMessage={sendMessage}/>
      </div> 
      </div>
  )
 
 

}
}

export default Conversation;