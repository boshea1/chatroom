import { useState } from "react";
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import { auth, db } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
const Input = ({sendMessage}) => {
    const [input, setInput] = useState({})
    const [user, loading] = useAuthState(auth)

    const handleClick = async () => {
      try {
        const docRef = await addDoc(collection(db, 'users'),{
          ...input
        })
        console.log('doc written with id:', docRef.id )
      } catch(e){
        console.log('error adding document:', e)
      }
      setInput({...input,message:''})
    }
    
  
    
  return (
    <>
    <div className='bottom-0'>
      <input className='border-2 text-center w-[90vw] sm:w-[90vw] border-solid pl-3 border-gray-900 ml-3 mt-4 h-9'
    type='text' placeholder='Write Here' value={input.message} onChange={(e)=>{setInput({createdAt: serverTimestamp()  ,message:e.target.value, user: user.displayName})}}/>
    <button className='mb-5 ml-3 border-2 p-1'
     onClick={()=>{handleClick();
     setInput('');
     sendMessage()}}>Click Me</button>
      </div>
    </>
  )
}

export default Input